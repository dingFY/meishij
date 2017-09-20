Vue.component('login',{
	template:'#login',
  data:function(){
    return{
        config:{            
          username:'',  //用户名    
          password:'',  //密码    
        },
        errorShow:false,   //登陆失败错误提示
        beDisabled:true ,    //如果输入为空 按钮不可点击

        phoneregister:{   //手机注册
            phone:'',
            password:'',
            code:'',
        },
        emailregister:{//邮箱注册
          email:'',
          password:'',
        },
    }
  },
	methods:{
      // 登陆时验证用户输入格式是否正确,如果不正确，按钮不可点击
      onblur:function(){
        var username = this.config.username;
        var password = this.config.password;
          if(username==''|| password==''){
              this.beDisabled=true;
          }else{
            this.beDisabled=false;
          }
      },


      //登陆时发送请求到服务器
      send:function(){
          this.$http({
            url:this.$store.state.url+'login',
            emulateJSON: true,
            method:"post",
            data:this.config,
          }).then(function(res){
            if(res.data == 'ok'){
              var storage = window.localStorage; //将用户信息保存到本地
              storage.username = this.config.username;
              this.$store.commit('open'); 
              this.config.username='';
              this.config.password='';
              this.errorShow=false;
            }else{
              this.errorShow = true;
            }
          },function(){})
      },


      // 手机登陆获取四位验证码
      getCode:function(n) {
          var all = "azxcvbnmsdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP0123456789";
          var b = "";
          for (var i = 0; i < n; i++) {
            var index = Math.floor(Math.random() * 62);
            console.log(Math.random() * 62)
            b += all.charAt(index);

          }
          return b;
        },
      change:function(event){
          event.target.value = this.getCode(4);
          $('.fatch_code').css({
            'background':'#8fc31f',
            'color':'white',
            'font-size':'22px',
            'font-weight':'weight',
            'letter-spacing':'4px',
            'transform':'translate-Y(-4px)'
          })
        },


      //手机注册号码验证
      phonefocus:function(){
       $('.phone_true , .phone_false').css('display','none');
       $('.phone_warning').css('display','block');
      },
      phoneblur:function(){
        var phonereg = /^1[34578]\d{9}$/;
        if(phonereg.test(this.phoneregister.phone)){
          $('.phone_warning').css('display','none');
           $('.phone_true').css('display','block');
        }else{
          $('.phone_warning').css('display','none');
          $('.phone_false').css('display','block');
        }
      },


      // 手机注册密码验证
      passwordfocus:function(){
        $('.strongly').css('display','none');
        $('.password_hint').css('display','block');
      },
      P_passwordblur:function(){
        var weak=/^[0-9A-Za-z]{6,16}$/
        var middle=/^(?=.{6,16})[0-9A-Za-z]*[\x00-\x2f\x3A-\x40\x5B-\xFF][0-9A-Za-z]*$/
        var strong=/^(?=.{6,16})([0-9A-Za-z]*[\x00-\x2F\x3A-\x40\x5B-\xFF][0-9A-Za-z]*){2,}$/
        if(weak.test(this.phoneregister.password)){
           $('.password_hint').css('display','none');
          $('.password_weak').css('display','block');
        }else if(middle.test(this.phoneregister.password)){
           $('.password_hint').css('display','none');
          $('.password_middle').css('display','block');
        }else if(strong.test(this.phoneregister.password)){
           $('.password_hint').css('display','none');
          $('.password_strong').css('display','block');
        }else{
          $('.password_hint').css('display','block');
        }
      },


      //邮箱注册号码验证
      emailfocus:function(){
       $('.email_true , .email_false').css('display','none');
       $('.email_warning').css('display','block');
      },
      emailblur:function(){
        var emailreg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(emailreg.test(this.emailregister.email)){
          $('.email_warning').css('display','none');
           $('.email_true').css('display','block');
        }else{
          $('.email_warning').css('display','none');
          $('.email_false').css('display','block');
        }
      },


      // 邮箱注册密码验证
      passwordfocus:function(){
        $('.strongly').css('display','none');
        $('.password_hint').css('display','block');
      },
      E_passwordblur:function(){
        var weak=/^[0-9A-Za-z]{6,16}$/
        var middle=/^(?=.{6,16})[0-9A-Za-z]*[\x00-\x2f\x3A-\x40\x5B-\xFF][0-9A-Za-z]*$/
        var strong=/^(?=.{6,16})([0-9A-Za-z]*[\x00-\x2F\x3A-\x40\x5B-\xFF][0-9A-Za-z]*){2,}$/
        if(weak.test(this.emailregister.password)){
           $('.password_hint').css('display','none');
          $('.password_weak').css('display','block');
        }else if(middle.test(this.emailregister.password)){
           $('.password_hint').css('display','none');
          $('.password_middle').css('display','block');
        }else if(strong.test(this.emailregister.password)){
           $('.password_hint').css('display','none');
          $('.password_strong').css('display','block');
        }else{
          $('.password_hint').css('display','block');
        }
      },


     // 手机注册发送请求到服务器：
      phoneMsg:function(){
        var phone = this.phoneregister.phone;
        var password = this.phoneregister.password;
        var code = this.phoneregister.code;
          if(phone==''|| password==''||code==''){
              alert('朋友，请完善信息！')
          }else{
            this.$http({
              url:this.$store.state.url+'phoneregister',
              emulateJSON: true,
              method:"post",
              data:this.phoneregister,
            }).then(function(res){
              if(res.data == 'ok'){
                window.location.href='success.html';
              }else{
                alert('该手机号已被注册,请重新注册！')
              }
            },function(){})
          }
      },


    // 邮箱注册发送请求到服务器：
      emailMsg:function(){
        var email = this.emailregister.email;
        var password = this.emailregister.password;
        if(email==''|| password==''){
            alert('朋友，请完善信息！')
        }else{
          this.$http({
            url:this.$store.state.url+'emailregister',
            emulateJSON: true,
            method:"post",
            data:this.emailregister,
          }).then(function(res){
            if(res.data == 'ok'){
              window.location.href = 'success.html';
             
            }else{
              alert('该邮箱已被注册,请重新注册！')
            }
          },function(){})
        }
      },
    
	},
     
});

//切换更多第三方div
  $(document).ready(function(){
    $(".toggle").click(function(){
      $(".login_dsf_more").slideToggle("slow");
      if(this.text=='更多第三方登录方式 ∨'){
     		$(this).text('收起 ∧');
      }else{
      	$(this).text('更多第三方登录方式 ∨');
      }
    });
  });


//是否显示注册页面
  $(document).ready(function(){
    $("#show_register").click(function(){
      $(".register_box").slideToggle("slow");
       $(".login_box").slideToggle("hide");
      if(this.text=='还没有账号？免费注册 ∨'){
     		$(this).text('已有账号？马上登陆 ∧');
      }else{
      	$(this).text('还没有账号？免费注册 ∨');
      }
    });
  });


// 切换手机登陆还是邮箱登陆
$(function(){
	$('#tab').find('a').click(function(){
		$("#tab").find('a').attr('class','');
		$('.wrap_register').children('div').css('display','none');
		$(this).attr('class','active');
		$('.wrap_register').children('div').eq($(this).index()).css('display','block')
	});
});




