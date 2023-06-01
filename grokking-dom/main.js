
// const div = document.createElement('div')
// div.className = ('block')
// console.log(div)

// const b = document.createElement('b')
// b.classList.add('strong','red')
// console.log(b)

// const ul = document.createElement('ul')
// ul.className = 'list'
// const li = document.createElement('li')
// li.textContent = 'привет Мир'
// ul.prepend(li)
// console.log(ul)

// document.body.append(div)
// document.body.append(b)

// const div_red = document.createElement('div')
// div_red.className = 'red'


// const div_green = document.createElement('div')
// div_green.className = 'green'
// div_red.append(div_green)

// const div_blue = document.createElement('div')
// div_blue.className='blue'
// div_blue.textContent = 'я вложен'
// div_green.append(div_blue)


// console.log(div_red)

// const div = document.createElement('div')
// const ul = document.createElement('ul')
// const inst = document.createElement('a')
// inst.textContent = 'наш инстаграм'
// inst.href = 'instagram.com'
// const into = document.createElement('a')
// into.textContent = 'intocode'
// into.href = '#'
// const li_inst = document.createElement('li')
// li_inst.append(inst)

// const li_into = document.createElement('li')
// li_into.append(into)

// ul.append(li_inst, li_into)
// div.append(ul)
// console.log(div)

// document.body.prepend(div)



// const ul = document.createElement('ul')




// for (let i = 0 ; i < array.length; i++) {
//     const li = document.createElement('li')
//     li.textContent = array[i]
//     ul.append(li)
// }

// document.body.append(ul)


// const render =  (array) => {
//     const ul = document.createElement('ul')
//     for (let i = 0; i < array.length; i++) {
//         const li = document.createElement('li')
//         li.textContent = array[i]
//         ul.append(li)
//     }
//  document.body.append(ul)
// }



// const array = ["html", "css", "js"];
// render(array)


const array = [
    {
      name: 'Google',
      url: 'https://google.com'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com'
    },
    {
      name: 'intocode',
      url: 'https://intocode.ru'
    },
  ]

  const render = (array) => {
      const ul = document.createElement('ul')

      for (let i = 0; i < array.length; i++) {
          const li = document.createElement('li')
          const a = document.createElement('a')
          a.textContent = array[i].name
          a.href = array[i].url
          li.append(a)
          ul.append(li)
      }
      document.body.append(ul)
  }

  render(array)


