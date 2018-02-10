var currDirFiles = 'Education\nExperience\nProjects\nDocuments';
var curr = 'desktop';
var currPath = '~/Brenda_Zhang/Desktop';

var errColor = {
  finalize: function(div) {
    div.css('color', '#e50000');
  }
}

var listColor = {
  finalize: function(div) {
    div.css('color', '#00ffff');
  }
}

$(document).ready(function() {
  $('.terminal-content-container').terminal(function(command) {
    command = command.toLowerCase();
    var args = command.split(' ');
    var cmd = args[0];
    var subcmd = args[1] ? args[1].toLowerCase() : null;
    if (!cmd) {
      this.echo('');
    } else if (cmd === 'help' && !subcmd) {
      this.echo('help\ncd\nls\npwd', listColor);
    } else if (cmd === 'pwd' && !subcmd) {
      this.echo(currPath, listColor);
    } else if (cmd === 'ls' && !subcmd) {
      this.echo(currDirFiles, listColor);
    } else if (cmd === 'cd') {
      if (!subcmd) {
        this.echo('');
      } else if (subcmd === '../') {
        currDirFiles = 'Education\nExperience\nProjects\nDocuments';
        currPath = '~/Brenda_Zhang/Desktop';
        if (curr === 'desktop') {
          this.echo('zsh: cd: permission denied', errColor);
        }
        curr = 'desktop';
      } else if (subcmd == 'desktop') {
        currDirFiles = 'Education\nExperience\nProjects\nDocuments';
        curr = 'desktop';
        currPath = '~/Brenda_Zhang/Desktop';
      } else if (subcmd == 'education') {
        currDirFiles = 'Burton High School.jpg\nUC Berkeley.jpg\nCognitive Science Major.pdf\nComputer Science Minor.pdf';
        curr = 'folder';
        currPath = '~/Brenda_Zhang/Desktop/Education';
      } else if (subcmd == 'experience') {
        currDirFiles = 'The Climate Corporation.jpg\nStowk.jpg\nRegistria.png\nWeb Design DeCal.pdf\nAsian American Association.jpg\nFoundation or Letters.pdf';
        curr = 'folder';
        currPath = '~/Brenda_Zhang/Desktop/Experience';
      } else if (subcmd == 'projects') {
        currDirFiles = 'Discord Stop Bot.js\nDevil\'s Advocate.html\nReferobot.js\nLiquefy Web App.js\nNewsworthy New Tab.html\nCrayons4Kids Website.html';
        curr = 'folder';
        currPath = '~/Brenda_Zhang/Desktop/Projects';
      } else if (subcmd == 'documents') {
        currDirFiles = 'Resume.pdf\nAbout.pdf\nQuotes.pdf';
        curr = 'folder';
        currPath = '~/Brenda_Zhang/Desktop/Documents';
      } else {
        this.echo('cd: no such file or directory: ' + subcmd, errColor);
      }
    } else if (cmd === 'sudo') {
      this.echo('zsh: sudo: permission denied', errColor);
    } else {
      this.echo('zsh: command not found: ' + command, errColor);
    }
  }, {
    greetings: 'Brenda Desktop Interpreter - Last login: ' + new Date,
    name: 'interpreter',
    height: '90%',
    prompt: 'brendacs:~$ '
  });
});
