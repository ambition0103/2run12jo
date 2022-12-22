import React from 'react';
import Button from '../redux/components/button/Button';

function Main() {
  return (
    <div>
      메인메인
      {/* 버튼1 */}
      <Button backgroundColor="#2F80ED"  radius="4">
        버튼컴포넌트
      </Button>
      {/* 버튼2 */}
      <Button backgroundColor="#0a0a0a" radius="100">
        버튼컴포넌트
      </Button>
      {/* 버튼3 */}
      <Button backgroundColor="#8d8d8d" radius="4">
        취소
      </Button>
    </div>
  );
}

export default Main;
