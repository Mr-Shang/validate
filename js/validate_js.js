/**
 * Created by 东 on 2017/8/22.
 */
$().ready(function () {
    $("#signupForm").validate({
        rules:{
            //对应name属性
            firstname:"required",
            lastname:"required",
            username:{
                required:true, //required: true 值是必须的。
                minlength:2
            },
            password:{
                required: true,
                minlength: 5
            },
            confirm_password: {
                required: true,
                minlength: 5,
                equalTo: "#password"//和#id的值一样
            },
            email: {
                required: true,
                email: true
            },
            topic: {
                required: "#newsletter:checked",//required: "#id:checked" 表达式的值为真，则需要验证。required: function(){} 返回为真，表示需要验证。
                minlength: 2
            },
            agree: "required"
        },
        //设置提示信息，如果某个控件没有 message，将调用默认的信息
        messages:{
            firstname: "请输入您的名字",
            lastname: "请输入您的姓氏",
            username: {
                required: "请输入用户名",
                minlength: "用户名必需由两个字母组成"
            },
            password: {
                required: "请输入密码",
                minlength: "密码长度不能小于 5 个字母"
            },
            confirm_password: {
                required: "请输入密码",
                minlength: "密码长度不能小于 5 个字母",
                equalTo: "两次密码输入不一致"
            },
            email: "请输入一个正确的邮箱",
            agree: "请接受我们的声明",
            topic: "请选择两个主题"
        }

    })
})

//提交表单
//1.其他方式
$().ready(function() {
    $("#signupForm").validate({
        submitHandler:function(form){
            alert("提交事件!");//可以是自定义的一些方法，提交表单之前的一些操作
            form.submit();//表单提交
        }
    });
});
//2.ajax
$(".selector").validate({
    submitHandler: function(form)
    {
        $(form).ajaxSubmit();
    }
})
//3.默认
$.validator.setDefaults({
    submitHandler: function(form) { alert("提交事件!");form.submit(); }
});

//只验证表单
$().ready(function() {
    $("#signupForm").validate({
        debug:true//对表单进行debug
    });
});
//如果一个页面中有多个表单都想设置成为 debug，
$.validator.setDefaults({
    debug: true
})

// 重置表单
$().ready(function() {
    var validator = $("#signupForm").validate({
        submitHandler:function(form){
            alert("submitted");
            form.submit();
        }
    });
    $("#reset").click(function() {
        validator.resetForm();
    });

});