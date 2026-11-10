const fs = require('fs');
const path = require('path');

const modulesDir = './src/modules';
const subdirs = fs.readdirSync(modulesDir);

subdirs.forEach(subdir => {
  const modulePath = path.join(modulesDir, subdir, `${subdir}.module.ts`);
  if (fs.existsSync(modulePath)) {
    let content = fs.readFileSync(modulePath, 'utf8');
    const serviceName = subdir.charAt(0).toUpperCase() + subdir.slice(1) + 'Service';
    
    if (!content.includes('exports:')) {
      content = content.replace(/providers:\s*\[(.*?)\]/, `providers: [$1],\n  exports: [${serviceName}]`);
      fs.writeFileSync(modulePath, content);
    }
  }
});
console.log('Exported services in all feature modules.');
