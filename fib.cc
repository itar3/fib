#include "node.h"
#include <iostream>


namespace fib {
    using namespace std;
    using v8::FunctionCallbackInfo;
    using v8::Isolate;
    using v8::Local;
    using v8::Object;
    using v8::Number;
    
    int fib_ex(int n);

    void fibonacci(const FunctionCallbackInfo<v8::Value>&args){
        Isolate* isolate = args.GetIsolate();

        int n = args[0].As<Number>() -> Value();
        
        int toReturn = fib_ex(n);
        Local<Number> num = Number::New(isolate, toReturn);
        args.GetReturnValue().Set(toReturn);

    }
    
    int fib_ex(int n){
        if (n<= 1)
            return n;
        return fib_ex(n-1) + fib_ex(n-2);
    }


    void Initialize(Local<Object> exports){
        NODE_SET_METHOD(exports, "fibonacci", fibonacci);
    }

    NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize);

}