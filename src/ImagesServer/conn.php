<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

$target_path = "load/";
$new_path = $target_path;

//
$today = date('Y-m-d');
$image_name= $_POST['product']['fileName']; 
$image_type= $_POST['product']['type'];

$parts = explode('/', $image_type);
$extention= explode('.', $image_name);
$ext= $extention[count($extention)-1];

$image_content = base64_decode($_POST['product']['data'] );

$imagepath=$new_path . $today;// basename($image_name,'.'.$ext); 

$result = @file_put_contents($target_path .$today. '.'.$ext/* $image_name*/, $image_content);

 //echo json_encode(array( $_POST['product']['data']  ));
// die;
 //

if(true) {
/*echo "The file ". basename( $_FILES['uploadedfile']['name']).
" has been uploaded";*/

//$im= $this->png_a_jpg($src_main, 100);

//echo json_encode(array( 'image-name'=> $image_name, 'ext'=>$ext , 'basename'=>basename($image_name,'.'.$ext),'parts'=>$parts[1]));



  if($parts[1]=='png'){
    $image = imagecreatefrompng($target_path .$today. '.'.$ext);  //
    $bg = imagecreatetruecolor(imagesx($image), imagesy($image));
    imagefill($bg, 0, 0, imagecolorallocate($bg, 255, 255, 255));
    imagealphablending($bg, TRUE);
    imagecopy($bg, $image, 0, 0, 0, 0, imagesx($image), imagesy($image));
    imagedestroy($image);
    $quality = 60; // 0 = worst / smaller file, 100 = better / bigger file 
    imagejpeg($bg, $imagepath . ".jpg", $quality);
    imagedestroy($bg);
    unlink($target_path .$today. '.'.$ext ); //.$image_name);

  }elseif($parts[1]=='jpg'){
    $image = imagecreatefromjpeg($target_path .$today. '.'.$ext);  //
    $bg = imagecreatetruecolor(imagesx($image), imagesy($image));
    imagefill($bg, 0, 0, imagecolorallocate($bg, 255, 255, 255));
    imagealphablending($bg, TRUE);
    imagecopy($bg, $image, 0, 0, 0, 0, imagesx($image), imagesy($image));
    imagedestroy($image);
    $quality = 60; // 0 = worst / smaller file, 100 = better / bigger file 
    imagejpeg($bg, $imagepath . ".jpg", $quality);
    imagedestroy($bg);
    //unlink($target_path .$image_name);

  }


	echo json_encode(array(
				        'name'=> basename($image_name,$ext). "." . $parts[1],
				        
					'image_url' =>  'https://crearstore.com/fila/'.$imagepath . ".jpg",
				));
} else{
echo "There was an error uploading the file, please try again!";
}

?>