<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Data Received</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            line-height: 1.6; 
            margin: 0 auto; 
            max-width: 500px; 
            padding: 20px; 
            background-color: black;
        }
        h1, h2 {
            color: #333; 
            text-align: center; 
        }
        .form-group { 
            margin-bottom: 15px; 
        }
        label { 
            display: block; 
            margin-bottom: 5px; 
            font-weight: bold; 
        }
        input[type="text"], input[type="email"], input[type="password"], select, textarea {
            width: 100%; 
            padding: 8px; 
            border: 1px solid #ddd; 
            border-radius: 4px;
        }
        .data-display { 
            background-color:rgb(44, 207, 244); 
            padding: 15px; 
            border-radius: 5px; 
            margin-bottom: 20px;
        }
        .link {
            border: 1px solid #ddd;
            text-decoration  : none;
            padding: 10px 15px;
            background-color:rgb(71, 205, 229);
            color: white;
            border-radius: 4px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1 style="color: white;">Registration Data</h1>
    
    <div class="data-display">
        <h2>Data Submitted :</h2>
        <?php
        foreach ($_POST as $key => $value) {
            echo "<p><strong>" . htmlspecialchars($key) . ":</strong> " . htmlspecialchars($value) . "</p>";
        }
        ?>
    </div>
    
    <p><a href="index.php" class="link">Return to the form</a></p>
</body>
</html>