<template>
    <div class="author">
        <g-image
                alt="Author image"
                class="author__image"
                src="https://cdn.zz-yy.top/Images/avatar.webp"
                width="180"
                height="180"
                blur="5"
        />

        <h1 v-if="showTitle" class="author__site-title">{{ $static.metadata.siteName }}</h1>

        <p class="author__intro">不驰于空想&nbsp;&nbsp;&nbsp;&nbsp;不骛于虚声</p>

        <p class="author__links">
            <g-link href="//zz-yy.top" target="_blank">
                <font-awesome :icon="['fas', 'id-badge'] "/>
            </g-link>
            <g-link to="/archives" style="color: var(--title-color);" title="归档">
                <font-awesome :icon="['fas', 'archive']"/>
            </g-link>
            <span style="vertical-align: .12em ">|</span>
            <a href="//github.com/Junior125306" target="_blank" style="color: var(--title-color);" title="力扣">
                <svg t="1600606729726" style="vertical-align: -.12em;margin:0 -.4em 0 -.24em"
                     class="svg-inline--fa fa-github fa-w-16" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="1374" width="16" height="16">
                    <path d="M686.969238 765.086476l-115.039501 111.200586c-19.877051 19.919706-47.389279 28.237356-77.759367 28.237357s-57.882315-8.31765-77.802021-28.237357l-184.779799-186.102093c-19.919706-19.919706-29.943541-49.052809-29.943541-79.465551s10.023835-57.882315 29.943541-77.80202l184.225289-186.827222c19.919706-19.919706 47.986444-27.512228 78.356531-27.512228s57.882315 8.31765 77.759367 28.237357l115.039501 111.157931c21.924473 21.967128 58.223552 21.199345 81.043772-1.620876 22.82022-22.862875 23.588003-59.161953 1.66353-81.086426l-111.285895-112.43757a215.619088 215.619088 0 0 0-104.290538-57.029222l105.228939-106.764506c22.009782-21.924473 21.241999-58.266206-1.578221-81.086426-22.82022-22.82022-59.161953-23.545348-81.129081-1.620876l-430.811629 430.854284c-41.844179 41.886834-63.725997 99.683839-63.725997 163.580455 0 63.896616 21.881818 123.485115 63.725997 165.28664l185.419619 186.016783c41.844179 41.75887 99.683839 61.934504 163.537801 61.934504s121.693622-21.839164 163.580455-63.725997l111.285895-112.480225c21.924473-21.924473 21.15669-58.223552-1.66353-81.043772s-59.119299-23.588003-81.001117-1.66353z m200.86059-209.860714H455.098741c-29.943541 0-54.171363 25.763389-54.171363 57.413114s24.227822 57.413114 54.171363 57.413114h432.731087c29.900886 0 54.171363-25.763389 54.171363-57.413114s-24.270477-57.413114-54.171363-57.413114z"
                          p-id="1375" fill="#2c2c2c"></path>
                </svg>
            </a>
            <a href="//github.com/Junior125306" target="_blank" style="color: var(--title-color);" title="github">
                <font-awesome :icon="['fab', 'github']"/>
            </a>
        </p>
<!--        <p class="author__links links_title" >-->
<!--            <span  v-for="(item,i) in this.title_data" class="links_span">{{item}}</span>-->
<!--        </p>-->
    </div>
</template>

<static-query>
    query {
    metadata {siteName }
    }
</static-query>

<script>
    export default {
        props: ['showTitle'],
        data() {
            return {
                title_data: ['主站','归档','力扣','github']
            }
        }
    }
</script>

<style lang="scss">

    .links_span {
        opacity: 0.8;
        border: 1px solid black;
        transition: .2s;
    }

    .links_title {
        border: 1px solid black;
        position: relative;
        bottom: 1em;
        margin: 0;
        padding: 0;
    }

    [data-tip]::before,
    [data-tip]::after {
        position: absolute;
        visibility: visible;
        opacity: 0;
        z-index: 20200618;
        pointer-events: none;
        transition: .2s;
    }

    .author {
        margin: 0 auto;
        max-width: 500px;
        text-align: center;
        padding: calc(var(--space) / 2) 0;

        &__image {
            border-radius: 100%;
            width: 90px;
            height: 90px;
            margin-bottom: 0.5em;
        }

        &__intro {
            opacity: 0.8;
        }

        &__site-title {
            font-size: 1.5em;
        }

        &__links {
            margin-top: -0.5em;
            font-size: 1em;

            a {
                color: var(--link-color);
                margin: 0 0.5em;
            }
        }
    }
</style>
