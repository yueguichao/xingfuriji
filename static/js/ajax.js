function ajax( method,url,data ){
    return new Promise((resolve,reject)=>{
        //1.创建xhr对象
        var xhr = new XMLHttpRequest();
        //2.设置请求参数
        xhr.open(method, method=='get'? (url+'?'+toSearchString(data) ) : url );
        console.log('参数', toSearchString(data) );
        //3.发送请求
        xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
        //设置请求头 Authorization
        xhr.setRequestHeader('Authorization','Bearer ' + localStorage.getItem('token'));
        xhr.send( method=='post' ? toSearchString(data) : null );
        //4.设置异步回调
        xhr.onreadystatechange = function(res){
            console.log(xhr);
            if( xhr.readyState == 4 && xhr.status == 200 ){
                resolve( JSON.parse( xhr.responseText ) );
            }else if( xhr.status == 401 ){
                location.href = './login.html'
            }
        }
    })
}

//对象转查询字符串
function toSearchString(obj){
    var str = '';
    for(var key in obj){
        str += (key + '=' + obj[key] + "&")
    }
    return str.slice(0,str.length-1);
}

