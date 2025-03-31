<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Form</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            line-height: 1.6; 
            margin: 0 auto; 
            max-width: 500px; 
            padding: 20px; 
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
        input[type="submit"] { 
            background-color:rgb(29, 202, 241); 
            color: white; 
            padding: 10px 15px; 
            border: none; 
            border-radius: 4px; 
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Registration Form</h1>
    <form action="cible.php" method="post">
        <div class="form-group">
            <label for="firstname">First Name:</label>
            <input type="text" id="firstname" name="Firstname" required>
        </div>
        
        <div class="form-group">
            <label for="lastname">Last Name:</label>
            <input type="text" id="lastname" name="Lastname" required>
        </div>
        
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="Email" required>
        </div>
        
        <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" name="Password" required>
        </div>
        
        <div class="form-group">
            <label for="gender">Gender:</label>
            <select id="gender" name="Gender">
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </div>
        
        <div class="form-group">
            <label for="comments">Comments:</label>
            <textarea id="comments" name="Comments" ></textarea>
        </div>
        
        <div class="form-group">
            <input type="submit" value="Submit">
        </div>
    </form>
</body>
</html>