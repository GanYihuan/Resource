/*
 * @Description: test
 * @Author: GanEhank
 * @Date: 2019-09-02 02:34:56
 * @LastEditors: GanEhank
 * @LastEditTime: 2019-09-02 02:56:45
 */
$(function() {
  $('div').click(function(ev) {
    ev.preventDefault()
    ev.stopPropagation()
    return false
  })
  $('div').one('click', function() {
    alert('123')
  })
  $('#div1').on('click', { name: 'hello' }, function(ev) {
    alert(ev.type)
  })
})
