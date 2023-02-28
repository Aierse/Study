# Laravel
## routes 폴더
### web.php && api.php
RouteServiceProvider 의 web 미들웨어 그룹안에 포함되는 라우트들을 포함하고 있으며, 세션 상태, CSRF 보호, 쿠키 암호화 기능을 제공한다. 만약 애플리케이션이 상태를 저장하지 않는 RESTful API를 제공하지 않는다면, 대부분의 라우트는 web.php 파일안에 정의될것이다.
#### 차이점
둘은 서로 대체될 수 있고, 둘 중 하나만 사용하더라도 시스템을 구축하는데 있어, 부족하지 않다. 그럼에도 나눠져 있는 이유는 파일의 이름에서 알수 있듯이, api.php는 API를 구현하는데, web.php는 html같은 정적 데이터를 리턴시켜주는 용도로 사용된다. 따라서, 백엔드는 api.php에, 프론트엔드는 web.php에 가깝다.

#### HTTP 메소드
routes/web.php 에 정의된 라우트는 브라우저를 통해서 유입되는 라우트 URL을 정의하는데 사용된다.  
라우터는 다음의 HTTP 메서드에 해당하는 응답을 위한 라우트를 등록할 수 있다.
```php
Route::get($uri, $callback);
Route::post($uri, $callback);
Route::put($uri, $callback);
Route::patch($uri, $callback);
Route::delete($uri, $callback);
Route::options($uri, $callback);
```
예를 들어 브라우저에서 http://localhost:8000/hello 에 같이 접속하기 위해서 다음의 라우트를 정의할 수 있다.
해당 페이지는 'hello world! 만을 리턴하는 페이지이다.  
```php
Route::get('/hello', function () {
 return 'hello world!';
};
```

여러개의 HTTP 메소드에 응답하는 라우트를 등록하고 싶다면 match를 사용할 수 있다.
```php
Route::match(['get', 'post'], '/', function () {
    // ...
})
```

모든 HTTP 메소드에 응답하고 싶은 라우트를 등록하고 싶다면 any를 사용한다.
```php
Route::any('/', function () {
    //
});
```
**동일한 URI를 공유하는 여러개의 라우트를 정의해야할 때에는 get, post, put, patch, delete, options 메서드를 any, match, redirect 메서드보다 먼저 정의해야한다.**  
**순서가 바뀔 경우 any, match, redirect가 HTTP 메소드를 먼저 처리하여 의도대로 동작하지 않을 수 있다.**
***


#### 라우트 파라미터
##### 필수 파라미터
{value} 식으로 표현하며 URL에 반드시 포함되어야 한다.
라우트중에 URI 세그먼트를 필요로 할 수도 있다. 다음과 같이 URL에서 사용자의 ID를 확인하고자 하는 경우, 라우트 파라미터를 정의할 수 있다.  
```php
Route::get('/user/{id}', function ($id) {
    return 'User '.$id;
});
```

라우트에서는 여러개의 라우트 파라미터를 정의할 수도 있다.  
라우트 파라미터의 순서대로 callback의 파라미터도 할당된다.
```php
Route::get('/posts/{post}/comments/{comment}', function ($postId, $commentId) {
    //
});
```

##### 선택적 파라미터
라우트 파라미터가 선택적으로 존재하는 경우 파라미터 이름뒤에 ?를 표시하여 선택적으로 파라미터를 받을 수 있다.  
선택적 파라미터를 사용하는 경우, 라우트 파라미터와 일치하는 변수가 기본값을 가지는지 확인하자.
```php
Route::get('/user/{name?}', function ($name = null) {
    return $name;
});

Route::get('/user/{name?}', function ($name = 'John') {
    return $name;
});
```
***
