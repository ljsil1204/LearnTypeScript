export default function () {}

// 타입스크립트 적용 프로젝트 => 선언한 변수를 사용하는 곳이 없으면 에러 발생
// 규칙 끄기 => .eslintrc.js 수정

// 타입 문자열
let message: string = 'Hello World';

// 타입 숫자
let value: number = 1;

// 타입 Union Type => 여러 타입 동시에
let nullableString: String | null = null; // 문자열 또는 null 타입
let undefinedOrNumber: undefined | number;
let numberOrStringOrNull: number | string | null = null;

// 타입 boolean
let isCompleted: boolean = true;

// 타입 any => 모든 타입 대입 가능
let anyValue: any = null;
