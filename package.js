Package.describe({
  name: 'ouk:event-bus',
  version: '1.0.0',
  summary: 'Event bus for server',
  git: 'git@github.com:andrejsm/meteor-event-bus.git',
})

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2')
  api.use(['ecmascript', 'check'])
  api.addFiles(['event-bus.js'], ['server'])
  api.export(['when', 'emit'], ['server'])
})
