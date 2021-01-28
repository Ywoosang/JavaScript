const fs = require('fs');

const writeStream = fs.WriteStream('./writestream.txt');
writeStream.on('finish',()=>{
    console.log('파일 쓰기 완료');
});

writeStream.write(' 9월 7일(월)까지가 수강 신청 정정기간인데 e-campus와의 연계가 원활하지 않아서 수업을 못 듣는 학생이 \n')
writeStream.write('발생하여 1주차에 한해서 강의 열람 및 과제 제출 기간을 재연장하기로 함.')
writeStream.end(); 
 