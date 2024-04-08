<?php
$a = "first";
$first = "second";
$second = "Done!";

$aa = $$a;
$aaa = $$$a;

echo "a -> $a \n";
echo "aa -> $aa \n";
echo "aa -> $aaa \n";

// In this example, $a is first, so $aa is $first, which is second.
// $aaa is $$$a, which is $second, which is Done!
// So the output is:
// a -> first
// aa -> second
// aa -> Done!

// So to conclude, $$$ is PHP's way of referencing variables indirectly.
// It's a way of referencing a variable by the value of another variable.
?>