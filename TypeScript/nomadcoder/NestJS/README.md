```
npm i -g @nestjs/cli : nestJS 다운로드
nest new project-name : 새로운 nestJS 프로젝트 생성
npm i class-validator class-transformer : 클래스 유효성 검사 라이브러리
npm i @nestjs/mapped-types : 타입을 변환시켜주는 라이브러리 <!-- 공부 필요 -->
```
## NestJS의 개쩌는점
1. express의 경우 기초적인 틀을 제공한다. 물론 이 점이 express를 유연하게 확장할 수 있는 장점이 되기도 하지만 비슷한 기능을 하는 여러 프레임워크나 라이브러리를 혼용하여 사용될 수 있다. NestJS는 구조화된 틀을 제공하여 해당 규칙을 준수할 수 있도록 강제한다.  
1. Validation 설정이 쉽다. class-validator와 class-transformer를 통해 서버가 받는 DTO의 값과 타입을 검사해 서버를 보호해준다. 이런 기능은 DTO의 프로퍼티에 데코레이터만 적용하면 타입검사를 해준다.
