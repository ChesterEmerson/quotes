const quotes = [
    {
      id: 1,
      name: 'Nelson Mandela',
      text: 'The greatest glory in living lies not in never falling, but in rising every time we fall',
      },
    {
      id: 2,
      name: 'Walt Disney',
      text: 'The way to get started is to quit talking and begin doing',
    },
    {
      id: 3,
      name: 'Steve Jobs',
      text: 'Your time is limited, so dont waste it living someone elses life. Dont be trapped by dogma which is living with the results of other peoples thinking',
    },
    {
      id: 4,
      name: 'Eleanor Roosevelt',
      text: 'If life were predictable it would cease to be life, and be without flavor',
    },
    {
      id: 5,
      name: 'John Lennon',
      text: 'Life is what happens when youre busy making other plans',      
    },
    {
      id: 6,
      name: 'Mother Teresa',
      text: 'Spread love everywhere you go. Let no one ever come to you without leaving happier ',      
    },
    {
      id: 7,
      name: 'Franklin D. Roosevelt',
      text: 'When you reach the end of your rope, tie a knot in it and hang on',      
    },
    {
      id: 8,
      name: 'Robert Louis Stevenson',
      text: 'Dont judge each day by the harvest you reap but by the seeds that you plant',      
    },
    {
      id: 9,
      name: 'Aristotle',
      text: 'It is during our darkest moments that we must focus to see the lights',      
    },
    {
      id: 10,
      name: 'Anne Frank',
      text: 'Whoever is happy will make others happy too',      
    },
  ];

    // item
  const author = document.getElementById('author')
  const quote = document.getElementById('quote')

   // start items 
  const facebook = document.querySelector('.facebook')
  const quotete = document.querySelector('.quotete')


  let currentItem = 0;

  window.addEventListener('DOMContentLoaded', function () {
      const item = quotes[currentItem];
      author.textContent = item.name;
      quote.textContent = item.text;
  });

  function showPerson(person){
    const item = quotes[person];
    author.textContent = item.name;
    quote.textContent = item.text;
  }
 // show next and preview
  prev.addEventListener('click', function() {
     currentItem++;
     if (currentItem > quotes.length -1){
        currentItem = 0;
     }
     showPerson(currentItem);
  });
  
  next.addEventListener('click', function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = quotes.length - 1;
    }
    showPerson(currentItem);
  });
