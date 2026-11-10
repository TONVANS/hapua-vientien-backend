import 'dotenv/config';
import { PrismaClient, Role, ActivityStatus, Visibility, MediaType, Weekday } from '../src/generated/prisma';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import * as bcrypt from 'bcrypt';

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log(
    '🚀 Starting database seed for the HWG 5 Meeting — "Human Capital in the Age of Intelligence" (Vientiane, 25–27 Nov 2026)...',
  );

  // 1. Seed Admin User
  const adminEmail = 'admin@hapua.org';
  const hashedPassword = await bcrypt.hash('admin123', 10);
  const admin = await prisma.delegation.upsert({
    where: { email: adminEmail },
    update: {
      password: hashedPassword,
      role: Role.ADMIN,
    },
    create: {
      firstName: 'System',
      lastName: 'Admin',
      email: adminEmail,
      password: hashedPassword,
      role: Role.ADMIN,
      position: 'Executive Secretariat Administrator',
      title: 'Mr.',
      delegationCode: 'HAP-ADMIN',
    },
  });
  console.log(`✅ Admin user ready: ${admin.email} (Password: admin123)`);

  // 2. Seed ASEAN Countries
  const countriesData = [
    { name: 'Lao PDR', code: 'LA' },
    { name: 'Thailand', code: 'TH' },
    { name: 'Vietnam', code: 'VN' },
    { name: 'Malaysia', code: 'MY' },
    { name: 'Singapore', code: 'SG' },
    { name: 'Indonesia', code: 'ID' },
    { name: 'Philippines', code: 'PH' },
    { name: 'Cambodia', code: 'KH' },
    { name: 'Brunei Darussalam', code: 'BN' },
    { name: 'Myanmar', code: 'MM' },
    { name: 'Timor-Leste', code: 'TL' },
  ];

  const countryMap: Record<string, string> = {};
  for (const c of countriesData) {
    const record = await prisma.country.upsert({
      where: { name: c.name },
      update: { code: c.code },
      create: c,
    });
    countryMap[c.code] = record.id;
  }
  console.log(`✅ Seeded ${countriesData.length} ASEAN countries.`);

  // 3. Seed Organizations (Power Utilities)
  const orgsData = [
    { name: 'Electricité du Laos', shortName: 'EDL' },
    { name: 'Electricity Generating Authority of Thailand', shortName: 'EGAT' },
    { name: 'Vietnam Electricity', shortName: 'EVN' },
    { name: 'Tenaga Nasional Berhad', shortName: 'TNB' },
    { name: 'PT PLN (Persero)', shortName: 'PLN' },
    { name: 'SP Group', shortName: 'SP' },
    { name: 'National Power Corporation / Meralco', shortName: 'NPC' },
    { name: 'Electricité du Cambodge', shortName: 'EDC' },
    { name: 'Department of Electrical Services Brunei', shortName: 'DESB' },
    { name: 'Yangon Electricity Supply Corporation', shortName: 'YESC' },
    { name: 'Electricidade de Timor-Leste', shortName: 'EDTL' },
    { name: 'HAPUA Secretariat', shortName: 'HAPUA' },
  ];

  const orgMap: Record<string, string> = {};
  for (const o of orgsData) {
    const record = await prisma.organization.upsert({
      where: { name: o.name },
      update: { shortName: o.shortName },
      create: o,
    });
    if (o.shortName) {
      orgMap[o.shortName] = record.id;
    }
  }
  console.log(`✅ Seeded ${orgsData.length} Power Utility Organizations.`);

  // 4. Seed Meeting Rooms
  const roomsData = [
    {
      name: 'Mekong Plenary Grand Auditorium',
      location: 'Floor 1, Main Convention Hall',
      capacity: 600,
      description: 'Main assembly hall equipped with simultaneous 6-language translation and state broadcast video systems.',
      imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Heritage Grand Ballroom',
      location: 'Floor 2, East Wing',
      capacity: 500,
      description: 'Lao architectural banqueting ballroom designed for state banquets and cultural gala dinners.',
      imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Bilateral Suite Mekong 1',
      location: 'Floor 3, VIP Executive Suite',
      capacity: 40,
      description: 'Confidential bilateral suite for minister-level negotiations and cross-border PPA signings.',
      imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Committee Room A - Generation & Grid',
      location: 'Floor 2, North Wing',
      capacity: 100,
      description: 'Working Group 1 breakout room for renewable integration and cross-border interconnection modeling.',
      imageUrl: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Committee Room B - Reliability & Codes',
      location: 'Floor 2, South Wing',
      capacity: 100,
      description: 'Working Group 2 breakout room for grid standards, cybersecurity, and power reliability.',
      imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Innovation Hub Stage',
      location: 'Floor 1, West Gallery',
      capacity: 150,
      description: 'High-tech presentation auditorium for the ASEAN Youth Energy Forum, AI skills showcases, and innovation demos.',
      imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const roomMap: Record<string, string> = {};
  for (const r of roomsData) {
    const existing = await prisma.room.findFirst({ where: { name: r.name } });
    if (!existing) {
      const created = await prisma.room.create({ data: r });
      roomMap[r.name] = created.id;
    } else {
      roomMap[r.name] = existing.id;
    }
  }
  console.log(`✅ Seeded ${roomsData.length} Meeting Rooms.`);

  // 5. Seed 3-Day Summit Activities & Sessions (Vientiane, 25–27 Nov 2026)
  // Theme: "Human Capital in the Age of Intelligence: Unlocking Skills, Innovation and Resilience"
  const activitiesData = [
    // Day 1: 2026-11-25
    {
      name: 'Delegate Registration & Accreditation Badge Collection',
      description: 'Check-in at the Vientiane summit venue hospitality desk. Welcome kit, delegate badge, and local 5G eSIM distribution.',
      date: new Date('2026-11-25'),
      startTime: new Date('2026-11-25T07:30:00Z'),
      endTime: new Date('2026-11-25T08:45:00Z'),
      status: ActivityStatus.UPCOMING,
      qrCode: 'ACT-REG-2026',
      roomName: 'Mekong Plenary Grand Auditorium',
    },
    {
      name: 'Opening Ceremony & Keynote: Human Capital in the Age of Intelligence',
      description: 'Welcome remarks by Electricité du Laos (EDL) and the HWG 5 Chair, followed by the keynote on building an AI-ready ASEAN power sector workforce.',
      date: new Date('2026-11-25'),
      startTime: new Date('2026-11-25T09:00:00Z'),
      endTime: new Date('2026-11-25T11:30:00Z'),
      status: ActivityStatus.UPCOMING,
      qrCode: 'ACT-PLENARY-OPEN',
      roomName: 'Mekong Plenary Grand Auditorium',
    },
    {
      name: 'Plenary Panel: Unlocking Skills for the Intelligent Grid',
      description: 'Utility CEOs and HR leaders on reskilling, upskilling, and regional competency frameworks for digital and AI-enabled power operations.',
      date: new Date('2026-11-25'),
      startTime: new Date('2026-11-25T13:30:00Z'),
      endTime: new Date('2026-11-25T15:30:00Z'),
      status: ActivityStatus.UPCOMING,
      qrCode: 'ACT-PANEL-SKILLS',
      roomName: 'Mekong Plenary Grand Auditorium',
    },
    {
      name: 'Traditional Lao Baci Blessing Ceremony & Welcome Dinner',
      description: 'Lao white-thread blessing ceremony conferring goodwill upon ASEAN delegates, followed by the official welcome dinner hosted by EDL in Vientiane.',
      date: new Date('2026-11-25'),
      startTime: new Date('2026-11-25T18:30:00Z'),
      endTime: new Date('2026-11-25T21:30:00Z'),
      status: ActivityStatus.UPCOMING,
      qrCode: 'ACT-BACI-BANQUET',
      roomName: 'Heritage Grand Ballroom',
    },

    // Day 2: 2026-11-26
    {
      name: 'Innovation Session: AI, Digital Twins & Smart Grid Operations',
      description: 'Practical applications of AI, analytics, and digital twins in generation, transmission, and distribution, and the skills utilities need to deploy them.',
      date: new Date('2026-11-26'),
      startTime: new Date('2026-11-26T09:00:00Z'),
      endTime: new Date('2026-11-26T12:00:00Z'),
      status: ActivityStatus.UPCOMING,
      qrCode: 'ACT-INNOV-AI',
      roomName: 'Committee Room A - Generation & Grid',
    },
    {
      name: 'Resilience Session: Climate-Ready Grids & Cyber-Resilient Workforce',
      description: 'Building organisational resilience through cybersecurity readiness, crisis response capability, and knowledge transfer across ASEAN utilities.',
      date: new Date('2026-11-26'),
      startTime: new Date('2026-11-26T09:00:00Z'),
      endTime: new Date('2026-11-26T12:00:00Z'),
      status: ActivityStatus.UPCOMING,
      qrCode: 'ACT-RESILIENCE',
      roomName: 'Committee Room B - Reliability & Codes',
    },
    {
      name: 'ASEAN Youth Energy Leadership Forum & Pitch Day',
      description: 'Young engineers and innovators present AI and clean energy solutions to utility CEOs, with mentoring on future-ready careers in the power sector.',
      date: new Date('2026-11-26'),
      startTime: new Date('2026-11-26T13:30:00Z'),
      endTime: new Date('2026-11-26T16:00:00Z'),
      status: ActivityStatus.UPCOMING,
      qrCode: 'ACT-YOUTH-INNOV',
      roomName: 'Innovation Hub Stage',
    },
    {
      name: 'Vientiane Heritage Tour: Pha That Luang & Patuxay',
      description: 'Guided visit to the golden Pha That Luang stupa and the Patuxay Victory Monument, followed by a networking evening along the Mekong riverside.',
      date: new Date('2026-11-26'),
      startTime: new Date('2026-11-26T16:30:00Z'),
      endTime: new Date('2026-11-26T19:30:00Z'),
      status: ActivityStatus.UPCOMING,
      qrCode: 'ACT-HERITAGE-TOUR',
      roomName: undefined,
    },

    // Day 3: 2026-11-27
    {
      name: 'HWG 5 Meeting (Heads of Utilities Session)',
      description: 'HWG 5 deliberations on HAPUA working group reports, the ASEAN Power Grid roadmap, and the regional human capital development agenda.',
      date: new Date('2026-11-27'),
      startTime: new Date('2026-11-27T09:00:00Z'),
      endTime: new Date('2026-11-27T11:30:00Z'),
      status: ActivityStatus.UPCOMING,
      qrCode: 'ACT-COUNCIL-MEETING',
      roomName: 'Bilateral Suite Mekong 1',
    },
    {
      name: 'Adoption of Joint Statement & HAPUA 2026 Communiqué',
      description: 'Formal adoption of the Vientiane Joint Statement on Human Capital, Innovation and Resilience by the Heads of ASEAN Power Utilities/Authorities.',
      date: new Date('2026-11-27'),
      startTime: new Date('2026-11-27T11:30:00Z'),
      endTime: new Date('2026-11-27T12:30:00Z'),
      status: ActivityStatus.UPCOMING,
      qrCode: 'ACT-COMMUNIQUE',
      roomName: 'Mekong Plenary Grand Auditorium',
    },
    {
      name: 'Handover Ceremony to the Next HWG 5 Meeting Host & Press Briefing',
      description: 'Official transition of the HWG 5 rotating chairmanship and closing international press conference.',
      date: new Date('2026-11-27'),
      startTime: new Date('2026-11-27T14:00:00Z'),
      endTime: new Date('2026-11-27T15:30:00Z'),
      status: ActivityStatus.UPCOMING,
      qrCode: 'ACT-HANDOVER-CLOSING',
      roomName: 'Mekong Plenary Grand Auditorium',
    },
  ];

  const createdActivities: any[] = [];
  for (const act of activitiesData) {
    const roomId = act.roomName ? roomMap[act.roomName] : null;
    const data = {
      name: act.name,
      description: act.description,
      date: act.date,
      startTime: act.startTime,
      endTime: act.endTime,
      status: act.status,
      roomId: roomId || null,
    };
    // Upsert by QR code so re-seeding an existing database picks up the new schedule
    const record = await prisma.activity.upsert({
      where: { qrCode: act.qrCode },
      update: data,
      create: { ...data, qrCode: act.qrCode },
    });
    createdActivities.push(record);
  }
  console.log(`✅ Seeded ${activitiesData.length} 3-Day Summit Activities.`);

  // 6. Seed ASEAN Delegates with Unique Codes
  const delegatesData = [
    {
      title: 'H.E.',
      firstName: 'Chanthaboun',
      lastName: 'Soukaloun',
      email: 'chanthaboun.s@edl.la',
      phoneNumber: '+856 20 5551 2345',
      position: 'Managing Director, Electricité du Laos',
      delegationCode: 'HAP-LA-001',
      countryCode: 'LA',
      orgShort: 'EDL',
    },
    {
      title: 'Dr.',
      firstName: 'Prasert',
      lastName: 'Sinsukprasert',
      email: 'prasert.s@egat.co.th',
      phoneNumber: '+66 81 234 5678',
      position: 'Governor, Electricity Generating Authority of Thailand',
      delegationCode: 'HAP-TH-001',
      countryCode: 'TH',
      orgShort: 'EGAT',
    },
    {
      title: 'Mr.',
      firstName: 'Tran Dinh',
      lastName: 'Nhan',
      email: 'nhantd@evn.com.vn',
      phoneNumber: '+84 90 345 6789',
      position: 'President & CEO, Vietnam Electricity',
      delegationCode: 'HAP-VN-001',
      countryCode: 'VN',
      orgShort: 'EVN',
    },
    {
      title: 'Dato\' Seri Ir.',
      firstName: 'Baharin',
      lastName: 'Din',
      email: 'baharindin@tnb.com.my',
      phoneNumber: '+60 12 345 6789',
      position: 'President / CEO, Tenaga Nasional Berhad',
      delegationCode: 'HAP-MY-001',
      countryCode: 'MY',
      orgShort: 'TNB',
    },
    {
      title: 'Mr.',
      firstName: 'Darmawan',
      lastName: 'Prasodjo',
      email: 'darmawan.p@pln.co.id',
      phoneNumber: '+62 811 234 5678',
      position: 'President Director, PT PLN (Persero)',
      delegationCode: 'HAP-ID-001',
      countryCode: 'ID',
      orgShort: 'PLN',
    },
    {
      title: 'Mr.',
      firstName: 'Stanley',
      lastName: 'Huang',
      email: 'stanleyhuang@spgroup.com.sg',
      phoneNumber: '+65 9123 4567',
      position: 'Group CEO, SP Group Singapore',
      delegationCode: 'HAP-SG-001',
      countryCode: 'SG',
      orgShort: 'SP',
    },
    {
      title: 'H.E.',
      firstName: 'Keo',
      lastName: 'Rottanak',
      email: 'keo.rottanak@edc.com.kh',
      phoneNumber: '+855 12 345 678',
      position: 'Managing Director, Electricité du Cambodge',
      delegationCode: 'HAP-KH-001',
      countryCode: 'KH',
      orgShort: 'EDC',
    },
    {
      title: 'Mr.',
      firstName: 'Emmanuel',
      lastName: 'Rubio',
      email: 'emmanuel.rubio@meralco.com.ph',
      phoneNumber: '+63 917 123 4567',
      position: 'President & CEO, NPC / Meralco Delegation',
      delegationCode: 'HAP-PH-001',
      countryCode: 'PH',
      orgShort: 'NPC',
    },
    {
      title: 'Mr.',
      firstName: 'Mohamad Irwan',
      lastName: 'Haji Ramlee',
      email: 'irwan.ramlee@des.gov.bn',
      phoneNumber: '+673 876 5432',
      position: 'Director, Department of Electrical Services Brunei',
      delegationCode: 'HAP-BN-001',
      countryCode: 'BN',
      orgShort: 'DESB',
    },
    {
      title: 'Daw',
      firstName: 'Khin Khin',
      lastName: 'Aye',
      email: 'khinkhinaye@yesc.gov.mm',
      phoneNumber: '+95 9 1234 5678',
      position: 'Director General, Yangon Electricity Supply Corporation',
      delegationCode: 'HAP-MM-001',
      countryCode: 'MM',
      orgShort: 'YESC',
    },
  ];

  const createdDelegates: any[] = [];
  for (const d of delegatesData) {
    const countryId = countryMap[d.countryCode];
    const organizationId = orgMap[d.orgShort];
    const record = await prisma.delegation.upsert({
      where: { email: d.email },
      update: {
        position: d.position,
        delegationCode: d.delegationCode,
        countryId,
        organizationId,
      },
      create: {
        title: d.title,
        firstName: d.firstName,
        lastName: d.lastName,
        email: d.email,
        phoneNumber: d.phoneNumber,
        position: d.position,
        delegationCode: d.delegationCode,
        role: Role.DELEGATION,
        countryId,
        organizationId,
      },
    });
    createdDelegates.push(record);
  }
  console.log(`✅ Seeded ${delegatesData.length} ASEAN Delegates.`);

  // 7. Seed Activity Registrations (M2M Link)
  for (const del of createdDelegates) {
    for (const act of createdActivities.slice(0, 5)) {
      try {
        await prisma.activityDelegation.upsert({
          where: {
            activityId_delegationId: {
              activityId: act.id,
              delegationId: del.id,
            },
          },
          update: {},
          create: {
            activityId: act.id,
            delegationId: del.id,
          },
        });
      } catch {
        // ignore duplicate
      }
    }
  }
  console.log(`✅ Seeded Activity-Delegation registrations.`);

  // 8. Seed Hotel Recommendations (Vientiane)
  const hotelsData = [
    {
      name: 'Landmark Mekong Riverside Hotel',
      description: 'Five-star riverside hotel facing the Mekong with executive floors, large function rooms, and dedicated delegation shuttles to the summit venue.',
      address: 'Thadeua Road, Vientiane Capital, Lao PDR',
      starRating: 5,
      contactInfo: 'Reservations via official website · quote HAPUA 2026 delegation',
      coverImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      mapUrl: 'https://maps.google.com/?q=Landmark+Mekong+Riverside+Hotel+Vientiane',
    },
    {
      name: 'Crowne Plaza Vientiane',
      description: 'Central business hotel close to Patuxay and the city centre, featuring executive lounges and high-speed connectivity for delegations.',
      address: 'Samsenthai Road, Vientiane Capital, Lao PDR',
      starRating: 5,
      contactInfo: 'Reservations via official website · quote HAPUA 2026 delegation',
      coverImage: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
      mapUrl: 'https://maps.google.com/?q=Crowne+Plaza+Vientiane',
    },
    {
      name: 'Lao Plaza Hotel',
      description: 'Landmark city-centre hotel with conference facilities, diplomatic concierge services, and easy access to ministries and embassies.',
      address: 'Samsenthai Road, Vientiane Capital, Lao PDR',
      starRating: 5,
      contactInfo: 'Reservations via official website · quote HAPUA 2026 delegation',
      coverImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      mapUrl: 'https://maps.google.com/?q=Lao+Plaza+Hotel+Vientiane',
    },
    {
      name: 'Don Chan Palace Hotel & Convention',
      description: 'Riverside high-rise hotel with panoramic Mekong views and an integrated convention centre suited to bilateral meetings.',
      address: 'Piawat Village, Sisattanak District, Vientiane Capital, Lao PDR',
      starRating: 5,
      contactInfo: 'Reservations via official website · quote HAPUA 2026 delegation',
      coverImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
      mapUrl: 'https://maps.google.com/?q=Don+Chan+Palace+Vientiane',
    },
    {
      name: 'Settha Palace Hotel',
      description: 'Restored French colonial boutique hotel with tranquil gardens, a short drive from Pha That Luang and the summit venue.',
      address: 'Pang Kham Road, Vientiane Capital, Lao PDR',
      starRating: 4,
      contactInfo: 'Reservations via official website · quote HAPUA 2026 delegation',
      coverImage: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
      mapUrl: 'https://maps.google.com/?q=Settha+Palace+Hotel+Vientiane',
    },
  ];

  for (const h of hotelsData) {
    const existing = await prisma.hotelRecommend.findFirst({ where: { name: h.name } });
    if (!existing) {
      await prisma.hotelRecommend.create({ data: h });
    }
  }
  console.log(`✅ Seeded ${hotelsData.length} Hotel Recommendations.`);

  // 9. Seed Travel Recommendations (Vientiane)
  const everyDay = [Weekday.MONDAY, Weekday.TUESDAY, Weekday.WEDNESDAY, Weekday.THURSDAY, Weekday.FRIDAY, Weekday.SATURDAY, Weekday.SUNDAY];
  const travelData = [
    {
      placeName: 'Pha That Luang (Great Stupa)',
      description: 'The golden Great Stupa and national symbol of Lao PDR, a sacred Buddhist monument at the heart of Lao identity and the annual That Luang Festival.',
      location: 'That Luang Road, Saysettha District, Vientiane',
      openTime: new Date('1970-01-01T08:00:00Z'),
      closeTime: new Date('1970-01-01T17:00:00Z'),
      openDays: everyDay,
      mapUrl: 'https://maps.google.com/?q=Pha+That+Luang+Vientiane',
      coverImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    },
    {
      placeName: 'Patuxay Victory Monument',
      description: 'Vientiane’s iconic war memorial blending Lao motifs with an arch design, with a rooftop terrace overlooking Lane Xang Avenue.',
      location: 'Lane Xang Avenue, Vientiane',
      openTime: new Date('1970-01-01T08:00:00Z'),
      closeTime: new Date('1970-01-01T17:00:00Z'),
      openDays: everyDay,
      mapUrl: 'https://maps.google.com/?q=Patuxay+Vientiane',
      coverImage: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    },
    {
      placeName: 'Wat Si Saket',
      description: 'Vientiane’s oldest surviving temple, famous for its cloister walls lined with thousands of small Buddha images.',
      location: 'Lane Xang Avenue & Setthathirath Road, Vientiane',
      openTime: new Date('1970-01-01T08:00:00Z'),
      closeTime: new Date('1970-01-01T16:00:00Z'),
      openDays: everyDay,
      mapUrl: 'https://maps.google.com/?q=Wat+Si+Saket+Vientiane',
      coverImage: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80',
    },
    {
      placeName: 'Buddha Park (Xieng Khuan)',
      description: 'Riverside sculpture park with more than 200 Buddhist and Hindu statues, including a giant reclining Buddha.',
      location: 'About 25 km southeast of Vientiane, near the Friendship Bridge',
      openTime: new Date('1970-01-01T08:00:00Z'),
      closeTime: new Date('1970-01-01T17:00:00Z'),
      openDays: everyDay,
      mapUrl: 'https://maps.google.com/?q=Buddha+Park+Xieng+Khuan',
      coverImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    },
  ];

  for (const t of travelData) {
    const existing = await prisma.travelRecommend.findFirst({ where: { placeName: t.placeName } });
    if (!existing) {
      await prisma.travelRecommend.create({ data: t });
    }
  }
  console.log(`✅ Seeded ${travelData.length} Travel Recommendations.`);

  // 10. Seed Gallery Photos
  if (createdActivities.length > 0) {
    const activityIdByQr = (qr: string) =>
      createdActivities.find((a) => a.qrCode === qr)?.id || createdActivities[0].id;

    const galleryItems = [
      {
        title: 'Opening Keynote: Human Capital in the Age of Intelligence',
        mediaUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
        mediaType: MediaType.IMAGE,
        visibility: Visibility.PUBLIC,
        description: 'Heads of ASEAN Power Utilities convene in Vientiane for the opening session on skills, innovation and resilience.',
        activityId: activityIdByQr('ACT-PLENARY-OPEN'),
      },
      {
        title: 'Traditional Baci Blessing Ritual',
        mediaUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        mediaType: MediaType.IMAGE,
        visibility: Visibility.PUBLIC,
        description: 'Lao cultural welcome and white thread blessing ceremony for international delegations.',
        activityId: activityIdByQr('ACT-BACI-BANQUET'),
      },
      {
        title: 'ASEAN Youth Energy Innovation Showcase',
        mediaUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
        mediaType: MediaType.IMAGE,
        visibility: Visibility.PUBLIC,
        description: 'Young engineers pitch AI and clean energy ideas to utility leaders at the Innovation Hub Stage.',
        activityId: activityIdByQr('ACT-YOUTH-INNOV'),
      },
    ];

    for (const g of galleryItems) {
      const existing = await prisma.gallery.findFirst({ where: { title: g.title } });
      if (!existing) {
        await prisma.gallery.create({ data: g });
      }
    }
    console.log(`✅ Seeded Gallery Media Items.`);
  }

  console.log('🎉 Database seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
