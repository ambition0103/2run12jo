import React from 'react';
import Button from '../redux/components/button/Button';
import { Link } from 'react-router-dom';

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


       {/* 예시버튼 */}
      <form>
        일정제목 <input />
        담당자 <input />
      <Link to="/:id">
        <Button backgroundColor="#c43c3c" radius="4">
        상세페이지
      </Button>
      </Link>
      </form>


    </div>
  );
}

export default Main;
