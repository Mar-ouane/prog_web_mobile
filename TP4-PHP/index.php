<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>join us</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- Hire Me Section -->
    <section class="hire-me" id="hire-me">
        <div class="title">
            <h2>Join <span>now</span></h2>
        </div>
        <div class="box">
            <div class="card">
                <div class="hire-form">
                    <form action="cible.php" method="post">
                        <div class="form-group">
                            <label for="first-name">First Name:</label>
                            <input type="text" id="first-name" name="first-name" >
                        </div>
                        <div class="form-group">
                            <label for="last-name">Last Name:</label>
                            <input type="text" id="last-name" name="last-name" >
                        </div>
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" >
                        </div>
                        <div class="form-group">
                            <label for="Password">Password:</label>
                            <input type="password" id="Password" name="Password">
                        </div>
                        <div class="form-group">
                            <label for="service">Selected tier:</label>
                            <select id="service" name="service" >
                                <option value="">_</option>
                                <option value="tier 1">tier 1</option>
                                <option value="tier 2">tier 2</option>
                                <option value="teir 3">tier 3</option>
                            </select>
                        </div>
                        
                       
                        <div class="form-group">
                            <input id="submit" type="submit" value="Submit">
                        </div>
                    </form>
            </div>
            </div>
        </div>
    </section>
    <!-- End of Hire Me Section -->
</body>
</html>
