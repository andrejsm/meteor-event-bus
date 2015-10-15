const EventEmitter = Npm.require('events').EventEmitter
let bus = new EventEmitter

if (Match.test(Meteor.settings.eventBus, Match.ObjectIncluding({ maxListeners: Match.Integer }))) {
  let { maxListeners } = Meteor.settings.eventBus
  bus.setMaxListeners(maxListeners || bus.getMaxListeners())
}

when = function(event, callback) {
  bus.addListener(event, function() {
    callback(...arguments)
  })
}

emit = function() {
  bus.emit(...arguments)
}
