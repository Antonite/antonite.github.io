window.onload = function () {
    var inps = $('#file_input');
    [].forEach.call(inps, function (upload) {
        upload.onchange = function (e) {
            console.log(this.files);

                var frm = new FormData();
                frm.append('imageInput', this.files[0]);
                $.ajax({
                    method: 'POST',
                    address: 'https://antonite.github.io/comics',
                    data: frm,
                    contentType: false,
                    processData: false,
                    cache: false
                });
        };
    });
}