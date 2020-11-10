---
layout: null
sitemap:
  exclude: 'yes'
---

$(document).ready(function () {
  const link = $('.panel-main__topbar>a').get()
    .find(v => v)
  link.href = window.location.origin

  const fingerRightIcon = $('i.far.fa-hand-point-right')
  $(fingerRightIcon).addClass('hidden')

  const toggleContent = function (e) {
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return
    currentWidth = $('.panel-cover').width()
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed')
      $('.content-wrapper').addClass('animated slideInRight')
    } else {
      $(fingerRightIcon).removeClass('hidden')
      $('.panel-cover').css('max-width', currentWidth)
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
    }
  }
  $('a.blog-button').click(toggleContent)

  $('a.about-button').click(toggleContent)

  const { hash, pathname } = window.location
  
  const baseurl = '{{ site.baseurl }}'

  const notInHome = (hash && hash == '#blog')
    || (pathname !== baseurl + '/' && pathname !== baseurl + '/index.html')

  $('.content-wrapper').toggleClass('no-overflow', !notInHome)
  
  if (notInHome) {
    $('.panel-cover').addClass('panel-cover--collapsed')
    $(fingerRightIcon).removeClass('hidden')
  }

  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('hidden animated fadeIn')
  })

  $('.navigation-wrapper .blog-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible')
    $('.btn-mobile-menu__icon').toggleClass('hidden animated fadeIn')
  })

})
