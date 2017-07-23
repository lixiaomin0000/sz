/**
 * Created by Administrator on 2017/7/22 0022.
 */
$(function () {

    function photoSow(show,show2,show3,hide1,hide2) {
        show.click(function () {
            $("#material_photo").show();$("#material_photoP").show()
        });
        show2.click(function () {
            $("#material_photo").show();$("#material_photoP").hide()
        });
        show3.click(function () {
            $("#material_photo").show();$("#material_photoP").hide()
        });
        hide1.click(function () {
            $("#material_photo").hide();
        });
        hide2.click(function () {
            $("#material_photo").hide();
        });
    };
    photoSow($('#show1'),$('#show2'),$('#show3'),$("#material_photo"),$("#material_Xphoto li"));
});