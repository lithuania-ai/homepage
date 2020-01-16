// Mobile Support
if (/Android|webOS|iPhone|iPad|iPod|pocket|psp|kindle|avantgo|blazer|midori|Tablet|Palm|maemo|plucker|phone|BlackBerry|symbian|IEMobile|mobile|ZuneWP7|Windows Phone|Opera Mini/i.test(navigator.userAgent)){
  window.onload = function (){
    document.getElementById('asciGraph').style.display = 'none';
  }
};

// Text Variables

const homeText = Termpage.replace(`
Welcome to the www.lithuana.ai a home page of Artificial Intelligence Association of Lithuania.
Browse our terminal like website to findout more about LDIA. Type help to list out all the available commands.\n\n`,

{
  'Artificial Intelligence Association of Lithuania': Termpage.color('#fd03fc'),
  'help': Termpage.color('#ad03fc'),
  'www.lithuana.ai': Termpage.link('http://www.lithuana.ai'),
});

const helpText = Termpage.replace(`
Available commands are: home, help, about, contacts, faq, events, join\n\n`,
{
  'home': Termpage.color('#ad03fc'),
  'help': Termpage.color('#ad03fc'),
  'about': Termpage.color('#ad03fc'),
  'contacts': Termpage.color('#ad03fc'),
  'faq': Termpage.color('#ad03fc'),
  'events': Termpage.color('#ad03fc'),
  'join': Termpage.color('#ad03fc'),

});


const aboutText = Termpage.replace(`
  Command not found. Please type help for the list of all available commands.\n\n`,
{
    'Command not found.': Termpage.color('red'),
    'help': Termpage.color('green'),
});

const contactsText = Termpage.replace(`
  Command not found. Please type help for the list of all available commands.\n\n`,
{
    'Command not found.': Termpage.color('red'),
    'help': Termpage.color('green'),
});

const faqText = Termpage.replace(`
  Command not found. Please type help for the list of all available commands.\n\n`,
{
    'Command not found.': Termpage.color('red'),
    'help': Termpage.color('green'),
});

const eventsText = Termpage.replace(`
  Command not found. Please type help for the list of all available commands.\n\n`,
{
    'Command not found.': Termpage.color('red'),
    'help': Termpage.color('green'),
});

const joinText = Termpage.replace(`
  Command not found. Please type help for the list of all available commands.\n\n`,
{
    'Command not found.': Termpage.color('red'),
    'help': Termpage.color('green'),
});

const invalidText = Termpage.replace(`
  Command not found. Please type help for the list of all available commands.\n\n`,
{
    'help': Termpage.color('#ad03fc'),
});
