<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laravel Project</title>
    <!-- Include any CSS or other head elements here -->
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
</head>
<body>
    <div id="app">
        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}">
                    Laravel Project
                </a>
                <!-- Add more nav elements if needed -->
            </div>
        </nav>
        <main class="py-4">
            @inertia
        </main>
    </div>
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
