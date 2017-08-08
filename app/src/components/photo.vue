<script>
    export default {
        init:function(){
            //alert(0)
        },
        methods : {
            uploadImg : function(){
                var _this=this
               //    用于压缩图片的canvas
                var canvas = document.createElement("canvas");
                var ctx = canvas.getContext('2d');
                //    瓦片canvas
                var tCanvas = document.createElement("canvas");
                var tctx = tCanvas.getContext("2d");
                var maxsize = 100 * 1024;

                $('#upload_img').trigger("click");
                $('#upload_img').unbind('change')
                $('#upload_img').on('change',function(e){

                    if (!this.files.length) return;
                    var files = Array.prototype.slice.call(this.files);
                    if (files.length > 9) {
                      alert("最多同时只可上传9张图片");
                      return;
                    }
                    files.forEach(function(file, i) {
                        if (!/\/(?:jpeg|png|gif)/i.test(file.type)) return;
                        var reader = new FileReader();
                        reader.onload = function() {
                            var result = this.result;
                            var img = new Image();
                            img.src = result;
                            //$(li).css("background-image", "url(" + result + ")");
                            var newUploadImg =  '<div class="ser_item_img_box_in">'+
                                                '<div class="ser_list_item ser_list_item_img">'+
                                                '<img src='+result+'>'+
                                                '</div>'+
                                                '<div class="ser_img_close" @click="deleImg"><span></span></div>'+
                                                '</div>';
                                                
                            $('<div class="ser_item_img_box">').html(newUploadImg).prependTo($('.ser_img_box'));
                            _this.deleImg();

                            //如果图片大小小于100kb，则直接上传
                            if (result.length <= maxsize) {
                              img = null;
                              //*** upload(result, file.type, $(li));
                              return;
                            }
                    //      图片加载完毕之后进行压缩，然后上传
                            if (img.complete) {
                              callback();
                            } else {
                              img.onload = callback;
                            }
                            function callback() {
                                var data = compress(img);
                                //*** upload(data, file.type, $(li));
                                img = null;

                            }
                        };
                        reader.readAsDataURL(file);
                    })
                })
                function compress(img) {
                    var initSize = img.src.length;
                    var width = img.width;
                    var height = img.height;
                    //如果图片大于四百万像素，计算压缩比并将大小压至400万以下
                    var ratio;
                    if ((ratio = width * height / 4000000) > 1) {
                      ratio = Math.sqrt(ratio);
                      width /= ratio;
                      height /= ratio;
                    } else {
                      ratio = 1;
                    }
                    canvas.width = width;
                    canvas.height = height;
                //        铺底色
                    ctx.fillStyle = "#fff";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    //如果图片像素大于100万则使用瓦片绘制
                    var count;
                    if ((count = width * height / 1000000) > 1) {
                      count = ~~(Math.sqrt(count) + 1); //计算要分成多少块瓦片
                //            计算每块瓦片的宽和高
                      var nw = ~~(width / count);
                      var nh = ~~(height / count);
                      tCanvas.width = nw;
                      tCanvas.height = nh;
                      for (var i = 0; i < count; i++) {
                        for (var j = 0; j < count; j++) {
                          tctx.drawImage(img, i * nw * ratio, j * nh * ratio, nw * ratio, nh * ratio, 0, 0, nw, nh);
                          ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);
                        }
                      }
                    } else {
                      ctx.drawImage(img, 0, 0, width, height);
                    }
                    //进行最小压缩
                    var ndata = canvas.toDataURL('image/jpeg', 0.1);
                    console.log('压缩前：' + initSize);
                    console.log('压缩后：' + ndata.length);
                    console.log('压缩率：' + ~~(100 * (initSize - ndata.length) / initSize) + "%");
                    console.log('图片***：' + ndata);
                    tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0;
                    return ndata;
                    for(var i=0;i<fNum;i++){
                        if(files[i].type.search(/image/)>=0){
                            var blob = URL.createObjectURL(files[i]);

                            var newImg = new Image();
                            newImg.src = blob;
                        

                            var newUploadImg =  '<div class="ser_item_img_box_in">'+
                                                '<div class="ser_list_item ser_list_item_img">'+
                                                '<img src='+blob+'>'+
                                                '</div>'+
                                                '<div class="ser_img_close" @click="deleImg"><span></span></div>'+
                                                '</div>';
                                                
                            $('<div class="ser_item_img_box">').html(newUploadImg).prependTo($('.ser_img_box'));
                            console.log('图片2：' + blob);
                            alert(0)

                            return blob;
                        }
                    }
                }
            },
            deleImg: function(e){
                $('.ser_img_close').each(function(index,el) {
                    $(this).click(function(e) {
                        //var target = e.srcElement ? e.srcElement : e.target;
                        //$(target).parent().parent().parent().remove();
                        $(this).parent().parent().remove();
                        if($('.ser_img_close').length<3){
                            $('.ser_item_img_box_add').show();
                        }
                    });
                });
                if($('.ser_img_close').length==3){
                    $('.ser_item_img_box_add').hide();
                }
            },
            click: function(){
                $('.ser_img_close').each(function(index, el) {
                    $(this).click(function(event) {
                        alert(index)
                    });   
                });
            }
        }
    };
</script>
<template>
    <photo>
        <li class="clearfix ser_img_box">
            <div class="ser_item_img_box ser_item_img_box_add">
                <div class="ser_item_img_box_in">
                    <div class="ser_list_item ser_list_item_img" @click='uploadImg'>
                        <p>上传凭证最多3张</p>
                    </div>
                </div>
            </div>
        </li>
    </photo>
</template>
