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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 함수 타입
// 반환값 타입 지정안해서 자동추론됨.
function sum(a: number, b: number): number {
  return a + b;
}
const result = sum(1, 2);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 옵셔널 파라미터 => 생략가능 파라미터
function process(a: number, b: number, isDouble?: boolean) {
  const sumResult = a + b;
  return isDouble ? sumResult * 2 : sumResult;
}

// isDouble 타입 : boolean | undefined
const total = process(1, 2);
const doubleTotal = process(1, 2, true);

// 여러 반환값 타입을 가진 함수
// 타입 미리 명시 하지 않으면 => 반환값 자동 추론
function hello(value1: String, returnNull?: boolean) {
  if (returnNull) {
    return null;
  }
  return `Hello ${value1}`;
}

// 함수 반환 타입 => string | null
const answer = hello('world');
const nullAnswer = hello('world', true);

// 반환타입이 string | null 일때, 내장 함수 사용시 => 에러
// const repleaced = answer.replace('Hello', 'bye');

// 에러 수정방법 => 1) null이 아닐때만 함수실행 2) 옵셔널 체이닝 연산자 사용 : ?
if (answer !== null) {
  const repleaced1 = answer.replace('Hello', 'bye');
}
const repleaced2 = answer?.replace('Hello', 'bye');

// 인터페이스 interface
// 객체나 클래스 위한 타입 정할 때 사용
interface Profile {
  id: number;
  username: string;
  displayName: string;
  photoURL?: string; // 옵셔널 속성
}

// 다른 interface 참조 가능
interface RelationShip {
  from: Profile;
  to: Profile;
}
const relationShip: RelationShip = {
  from: {
    id: 1,
    username: 'user1',
    displayName: 'name1',
  },
  to: {
    id: 2,
    username: 'user2',
    displayName: 'name2',
  },
};

// interface 상속
interface Account extends Profile {
  email: String;
  password: String;
}

const account: Account = {
  id: 1,
  username: 'user1',
  displayName: 'name1',
  email: 'email',
  password: 'test',
};

// implements
interface Shape {
  getArea(): number;
  getPerimeter(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}
  // constructor(private radius: number) {}와 같은 의미의 코드
  // radius: number;
  // constructor(radius: number) {
  //   this.radius = radius;
  // }

  getArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }

  getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

const circle = new Circle(4);

const area = circle.getArea();
const perimeter = circle.getPerimeter();

// 배열 타입
const number: number[] = [1, 2, 3, 4, 5];
const text: string[] = ['hello', 'world'];

interface Person {
  name: string;
}

const person: Person[] = [{name: 'jon'}, {name: 'nam'}];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Type Alias => 타입에 별칭을 붙여주는 기능
// 객체타입 =>  interface or type 선언 가능
type Person1 = {
  name: string;
};

const person1: Person1 = {
  name: 'Jone',
};

//아래와 같은 타입은 type 문법으로만 선언 가능
type People = Person1[];
const people: People = [{name: 'jone'}];

type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'red';

//type 사용하여 만든 객체 타입에도 필드 추가 가능
// & 를 사용.
type Person2 = {
  name: string;
};

type Employee = Person & {
  job: string;
};

const empolyee: Employee = {
  name: 'jin',
  job: 'programmer',
};
