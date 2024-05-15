const arrayOfQuotes = [
    {'author': 'Mae West', 
     'quote': 'You only live once, but if you do it right, once is enough.'
    },
    {'author': 'Mahatma Gandhi', 
     'quote': 'Be the change that you wish to see in the world.'
    },
    {'author': 'Mark Twain', 
     'quote': 'If you tell the truth, you don\'t have to remember anything.'
    },
    {'author': 'Wayne Gretzy', 
     'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
];


function randomQuote() {
    const random = Math.trunc(Math.random() * arrayOfQuotes.length);
    document.querySelector('#quoteOutput').textContent = arrayOfQuotes[random].quote;
    document.querySelector('#authorOutput').textContent = arrayOfQuotes[random].author;
  }