var bnts = document.getElementsByClassName('bnts')
var ps = document.getElementsByTagName('p')
var H1 = document.getElementsByTagName('h1')
var bnt = document.getElementsByClassName('bnt')
var footer = document.getElementsByTagName('footer')
var span = document.getElementsByTagName('span')
var a = document.getElementsByTagName('a')

bnts[0].addEventListener('click', light)
bnts[1].addEventListener('click', dark)

function light() {
   document.body.style.backgroundColor = "#fff"
   ps[0].style.color = "#000" 
   H1[0].style.color = "#000"
   bnt[0].style.backgroundColor = "#023047"
   bnt[1].style.backgroundColor = "#023047"
   footer[0].style.backgroundColor = "#023047"
   span[0].style.color = "#023047"
   a[0].style.color = "#023047"
   a[1].style.color = "#023047"
   a[2].style.color = "#fff"
   a[3].style.color = "#fff"
   ps[1].style.color = "#fff"
}

function dark() {
   document.body.style.backgroundColor = "#000"
   ps[0].style.color = "#fff" 
   H1[0].style.color = "#fff"
   bnt[0].style.backgroundColor = "#22D4FD"
   bnt[1].style.backgroundColor = "#22D4FD"
   footer[0].style.backgroundColor = "#22D4FD"
   span[0].style.color = "#22D4FD"
   a[0].style.color = "#22D4FD"
   a[1].style.color = "#22D4FD"
   a[2].style.color = "#000"
   a[3].style.color = "#000"
   ps[1].style.color = "#000"
}

console.log(ps)