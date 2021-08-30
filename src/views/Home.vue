<template>
    <div>
        <banner></banner>
        <brandlogo></brandlogo>
    </div>
</template>
<script>

import brandlogo from '../components/Brandlogo'
import banner from '../components/Banner'
export default {
    name: 'Home',
    components: {
        brandlogo, banner
    }
}
</script>