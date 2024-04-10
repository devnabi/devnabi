<template>
    <div class="container">
        <div class="row">

            <div class="text-start mt-5">
                <h1 class="text-primary">User's List🪄</h1>
            </div>

            <div class="text-start mt-4">
                <button type="button" class="btn btn-secondary btn-lg fs-2 py-3 px-5">➕Add List</button>
            </div>
            <nav class="nav flex-column text-start my-5 fs-3">
                <!-- 현재를 알려주는 링크스타일 -->
                <!-- <a class="nav-link active" aria-current="page" href="#">Active</a> -->
                <a class="nav-link text-info" href="#">All</a>
                <a class="nav-link text-info mt-5" href="#">Incomplete</a>
                <a class="nav-link text-info mt-5" href="#">Completed</a>

                <div class="row mt-5">
                    <div class="col-auto">
                        <button class="btn btn-outline-info btn-sm">⚙️</button>
                    </div>
                </div>


            </nav>

        </div>
    </div>
</template>

<script>
export default {
    name: 'MyNav',
}
</script>
