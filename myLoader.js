module.exports = function myLoader(item) {
  console.log('hello loader!');

  // item : 로더함수로 처리해줄 대상 파일이 들어가게 된다
  return item.replace('console.log(', 'alert(');
};
