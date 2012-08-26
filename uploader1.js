<html>
  <head>
    <title>Upload Example</title>
  </head>
  <body>

    <form id="uploadForm"
          enctype="multipart/form-data"
          action="/api/photos"
          method="post">
      <input type="file" id="userPhotoInput" name="userPhoto" />
    </form>

    <span id="status" />
    <img id="uploadedImage" />
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
    <script src="/jquery.form.js"></script>
    <script src="/upload.js"></script>

  </body>
</html>