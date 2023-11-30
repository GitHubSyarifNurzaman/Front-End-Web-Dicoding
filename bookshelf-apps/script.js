let book = [];
function BOOKSHELF_APPS(BOOKSHELF_APPS) {
  BOOKSHELF_APPS.preventDefault();
  const title = document.querySelector('#inputBookTitle'),
    author = document.querySelector('#inputBookAuthor'),
    year = document.querySelector('#inputBookYear'),
    checbox = document.querySelector('#inputBookIsComplete'),
    dataBook = {
      id: +new Date(),
      title: title.value,
      author: author.value,
      year: Number(year.value),
      isComplete: checbox.checked,
    };
  y = confirm('Apakah kamu yakin sudah mengisi semua data?');

  if (y) {
    console.log(dataBook);
  } else {
    return dataBook;
  }
  console.log(dataBook), book.push(dataBook), document.dispatchEvent(new Event('bookChanged'));
}

function title(BOOKSHELF_APPS) {
  BOOKSHELF_APPS.preventDefault();
  const title = document.querySelector('#searchBookTitle');
  (query = title.value),
    query
      ? dataBook(
          book.filter(function (book) {
            return book.title.toLowerCase().includes(query.toLowerCase());
          })
        )
      : dataBook(book);
}
function author(BOOKSHELF_APPS) {
  const title = Number(BOOKSHELF_APPS.target.id),
    author = book.findIndex(function (book) {
      return book.id === title;
    });
  -1 !== author &&
    ((book[author] = {
      ...book[author],
      isComplete: !0,
    }),
    document.dispatchEvent(new Event('bookChanged')));
}
function year(BOOKSHELF_APPS) {
  const title = Number(BOOKSHELF_APPS.target.id),
    author = book.findIndex(function (book) {
      return book.id === title;
    });
  -1 !== author &&
    ((book[author] = {
      ...book[author],
      isComplete: !1,
    }),
    document.dispatchEvent(new Event('bookChanged')));
}

function checbox(BOOKSHELF_APPS) {
  const title = Number(BOOKSHELF_APPS.target.id),
    author = book.findIndex(function (book) {
      return book.id === title;
    });
  -1 !== author && (book.splice(author, 1), document.dispatchEvent(new Event('bookChanged')));
}
function dataBook(book) {
  const BOOKSHELF_APPS = document.querySelector('#incompleteBookshelfList'),
    title = document.querySelector('#completeBookshelfList');
  (BOOKSHELF_APPS.innerHTML = ''), (title.innerHTML = '');

  for (const dataBook of book) {
    const book = document.createElement('article');
    book.classList.add('book_item');
    const a = document.createElement('h2');
    a.innerText = dataBook.title;
    const u = document.createElement('p');
    u.innerText = 'Penulis: ' + dataBook.author;
    const r = document.createElement('p');

    if (((r.innerText = 'Tahun: ' + dataBook.year), book.appendChild(a), book.appendChild(u), book.appendChild(r), dataBook.isComplete)) {
      const BOOKSHELF_APPS = document.createElement('div');
      BOOKSHELF_APPS.classList.add('action');
      const author = document.createElement('button');
      (author.id = dataBook.id), (author.innerText = 'Belum Selesai dibaca'), author.classList.add('green'), author.addEventListener('click', year);
      const a = document.createElement('button');
      (a.id = dataBook.id),
        (a.innerText = 'Hapus buku'),
        a.classList.add('red'),
        a.addEventListener('click', checbox),
        BOOKSHELF_APPS.appendChild(author),
        BOOKSHELF_APPS.appendChild(a),
        book.appendChild(BOOKSHELF_APPS),
        title.appendChild(book);
    } else {
      const title = document.createElement('div');
      title.classList.add('action');
      const year = document.createElement('button');
      (year.id = dataBook.id), (year.innerText = 'Selesai dibaca'), year.classList.add('green'), year.addEventListener('click', author);
      const a = document.createElement('button');
      (a.id = dataBook.id), (a.innerText = 'Hapus buku'), a.classList.add('red'), a.addEventListener('click', checbox), title.appendChild(year), title.appendChild(a), book.appendChild(title), BOOKSHELF_APPS.appendChild(book);
    }
  }
}

function a() {
  !(function (book) {
    localStorage.setItem('books', JSON.stringify(book));
  })(book),
    dataBook(book);
}
window.addEventListener('load', function () {
  (book = JSON.parse(localStorage.getItem('books')) || []), dataBook(book);
  const author = document.querySelector('#inputBook'),
    year = document.querySelector('#searchBook');
  author.addEventListener('submit', BOOKSHELF_APPS), year.addEventListener('submit', title), document.addEventListener('bookChanged', a);
});
