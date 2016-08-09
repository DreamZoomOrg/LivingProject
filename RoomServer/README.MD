## 使用说明
### 项目结构
* biz 业务模块
* controller 控制器
* dataprocess 业务数据处理
* filter 过滤器
* librarian 配置库
* module 功能模块
* app.js 程序主入口

### 项目运行流程
* app.js启动项目，加载路由器，配置路由规则。（项目启动结束）
* 输入地址，项目根据地址寻找路由器中陪着的路由规则，分配对应的控制器（controller）
* 控制器根据请求方式，调用对应的业务方法（biz）
