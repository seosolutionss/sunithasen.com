<?php
if(isset($_POST['submit'])){
$to = "datemetonightgirls@gmail.com";
$subject = "mail from sunithasen.com";
$message =  $message = "<table style='width:50%;border:1px solid black;'>
<tr><th style='border:1px solid black;'>Name:</th>
<td style='border:1px solid black;'>".$_POST['name']."</td>
</tr>
<tr><th style='border:1px solid black;'>Email:</th>
<td style='border:1px solid black;'>".$_POST['email']."</td>
</tr>
<tr><th style='border:1px solid black;'>Phone:</th>
<td style='border:1px solid black;'>".$_POST['phone']."</td>
</tr>
<tr><th style='border:1px solid black;'>Message:</th>
<td style='border:1px solid black;'>".$_POST['message']."</td>
</tr>
</table>";
$header = "From:bangalore@escortsinchennai.com \r\n";
//  $header .= "Cc:afgh@somedomain.com \r\n";
$header .= "MIME-Version: 1.0\r\n";
$header .= "Content-type: text/html\r\n";
$retval = mail ($to,$subject,$message,$header);
if( $retval == true ) {
 ?> <script>window.location.href="https://www.sunithasen.com/reach-us.html";</script>
 <?php
}else{ ?>
   <script>window.location.href="https://www.sunithasen.com/reach-us.html";</script>
<?php }
}
?>