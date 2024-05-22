<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laravel Project</title>
    <!-- Include any CSS or other head elements here -->
    <link rel="stylesheet" href="<?php echo e(mix('css/app.css')); ?>">
</head>
<body>
    <div id="app">
        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="<?php echo e(url('/')); ?>">
                    Laravel Project
                </a>
                <!-- Add more nav elements if needed -->
            </div>
        </nav>
        <main class="py-4">
            <?php if (!isset($__inertiaSsrDispatched)) { $__inertiaSsrDispatched = true; $__inertiaSsrResponse = app(\Inertia\Ssr\Gateway::class)->dispatch($page); }  if ($__inertiaSsrResponse) { echo $__inertiaSsrResponse->body; } else { ?><div id="app" data-page="<?php echo e(json_encode($page)); ?>"></div><?php } ?>
        </main>
    </div>
    <script src="<?php echo e(mix('js/app.js')); ?>"></script>
</body>
</html>
<?php /**PATH C:\Users\drmad\OneDrive\Documents\cs_year4\sem2\Advanced-Web\Project\AWP\awp\resources\views/app.blade.php ENDPATH**/ ?>