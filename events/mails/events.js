const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}

const Emitter = new MyEmitter();

Emitter.on('user.registered', async (user) => {
  const emailUserConfirmation = require('@/emails/mails/userConfirmation');
  await emailUserConfirmation.sendConfirmationEmail(user);
});

module.exports = Emitter;