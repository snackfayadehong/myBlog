# myBlog-server


#### 依赖
- body-parser _HTTP请求体解析中间件_
- express _express框架_
- morgan _请求日志_
- NeteaseCloudMusicApi _网易云API（非官方）_
- CORS _跨域请求_ 
- express-session _存储中间件（保存用户信息）_

#### 结构
- src
  - index.js 入口文件
  - server.js 服务实例
  - exception 异常封装





## 学习记录

### ES6类

#### 定义类

- ES6中定义类通过<font color = red>class</font>关键字来定义一个类,类中定义<font color = red>construtor()</font>构造方法来初始化对象成员,可以定义属性和方法：

- ```js
	class 类名{
    	constructor([参数]){ //构造方法，用于初始化对象成员
        	//方法体
    	}
	}
  ```
  
- ```js
  // 定义类
  class person{
      construtor(name){
          this.name = name; // 类中定义属性
      }
      get(){  // 类中定义方法
          console.log("姓名",this.name);
      }
  }
  // 创建对象
  let p1 = new person("小明"); // 创建对象p1
  p1.get();// 姓名:小明
  ```



#### ES6继承

- ES6中的继承就是通过类来实现的,通过class定义父类和子类, 子类通过<font color = red>extends</font>继承父类,通过<font color = red>super</font>关键字访问和调用对象在父类上的方法(可以调用父类的构造方法,也可以调用父类的普通方法)

  - ```js
    // 定义父类
    class Parent{
        constructor(name,gender){
            this.name = name;
            this.gender = gender;
        };
        get(){
            console.log("姓名:",this.name);
            console.log("性别",this.gender);
        }
    }
    
    // 子类继承父类
    class Child extends Parent{
        constructor(name,gender,age){
            super(name,gender); // super必须在子类的this之前调用
            this.age = age;
        }
        disp(){
            console.log("年龄:",this.age)
        }
        change(){
            console.log(this.name+"的性别是"+this.gender,"今年" + this.age)
        }
    }
    var c1 = new Child('小红',"女",20)
    c1.get(); // 姓名:小红, 性别:女
    c1.disp(); // 年龄 20
    c1.change;// 小红的性别是女 今年20
    ```

  - 父类不能使用子类的方法

    - ```js
      var p1 = new Parent('张三','男',33);
      p1.get() // 姓名:张三 性别:男
      p1.disp() //TypeError:p1.disp is not a function
      ```

#### ES6继承和ES5继承区别
        1.ES5中的构造函数是一个普通函数，可以使用new关键字调用，也可以直接调用；ES6中的class不能当作普通函数直接调用，必须使用new关键字调用
    
        2.ES5中的原型方法和静态方法默认可枚举，class的默认不可枚举，若想要获取不可枚举属性，可以使用Object.getOwnPropertyNames方法
    
        3.ES5的继承，实质是先创造子类的实例对象this，再执行父类的构造函数向其添加实例方法和属性(也可不执行)。而ES6的继承机制是先创造父类的实例对象this，再用子类的构造函数修改this
    
        4.ES6中，class不存在变量提升，父类必须在子类前定义
