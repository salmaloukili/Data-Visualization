<div style="display: flex; flex-direction: row;">
    <div style="margin-left: 20px;">
        <input type="range" min="0" max="2099" bind:value={product_value1} />
        <p>Product number: {product_value1}</p>
        <p>Product Type: {productType1}</p>
        <p>Number of orders: {totalCount1}</p>
        <!-- Directional indicators for the second visualization -->
        <p style="color: blue;">EAST</p>
        <p style="color: red;">SOUTH</p>
        <p style="color: orange;">NORTH</p>
        <p style="color: purple;">WEST</p>
        <!-- First visualization -->
        <svg width="300" height="200">
            <g transform="translate(25,25)">
                <!-- East Region -->
                <rect x="0" y="0" width="50" height="50" fill="blue" fill-opacity="0.05"/>
                <rect x="0" y={50 - 50*countEast1 / totalCount1} width="50" height={50*countEast1 / totalCount1} fill="blue" fill-opacity="0.5"/>
                <text x="25" y="25" text-anchor="middle" dominant-baseline="middle" fill="blue">{countEast1}</text>

                <!-- South Region -->
                <rect x="55" y="0" width="50" height="50" fill="red" fill-opacity="0.05"/>
                <rect x="55" y={50-50*countSouth1 / totalCount1} width="50" height={50*countSouth1 / totalCount1} fill="red" fill-opacity="0.5"/>
                <text x="80" y="25" text-anchor="middle" dominant-baseline="middle" fill="red">{countSouth1}</text>

                <!-- North Region -->
                <rect x="0" y="55" width="50" height="50" fill="orange" fill-opacity="0.05"/>
                <rect x="0" y={105-50*countNorth1 / totalCount1} width="50" height={50*countNorth1 / totalCount1} fill="orange" fill-opacity="0.5"/>
                <text x="25" y="80" text-anchor="middle" dominant-baseline="middle" fill="orange">{countNorth1}</text>

                <!-- West Region -->
                <rect x="55" y="55" width="50" height="50" fill="purple" fill-opacity="0.05"/>
                <rect x="55" y={105-50*countWest1 / totalCount1} width="50" height={50*countWest1 / totalCount1} fill="purple" fill-opacity="0.5"/>
                <text x="80" y="80" text-anchor="middle" dominant-baseline="middle" fill="purple">{countWest1}</text>
            </g>
        </svg>
    </div>
    <div style="margin-left: 30px;">
        <input type="range" min="1" max="8" bind:value={product_value2} />
        <p>Type number: {product_value2}</p>
        <p>Type: {productType2}</p>
        <p>Number of orders: {totalCount2}</p>
        <!-- Directional indicators for the second visualization -->
        <p style="color: blue;">EAST</p>
        <p style="color: red;">SOUTH</p>
        <p style="color: orange;">NORTH</p>
        <p style="color: purple;">WEST</p>
        <div>
            <!-- Second visualization -->
            <svg width="300" height="200">
                <g transform="translate(25,25)">
                    <!-- East Region -->
                    <rect x="0" y="0" width="50" height="50" fill="blue" fill-opacity="0.05"/>
                    <rect x="0" y={50 - 50*countEast2 / totalCount2} width="50" height={50*countEast2 / totalCount2} fill="blue" fill-opacity="0.5"/>
                    <text x="25" y="25" text-anchor="middle" dominant-baseline="middle" fill="blue">{countEast2}</text>

                    <!-- South Region -->
                    <rect x="55" y="0" width="50" height="50" fill="red" fill-opacity="0.05"/>
                    <rect x="55" y={50-50*countSouth2 / totalCount2} width="50" height={50*countSouth2 / totalCount2} fill="red" fill-opacity="0.5"/>
                    <text x="80" y="25" text-anchor="middle" dominant-baseline="middle" fill="red">{countSouth2}</text>

                    <!-- North Region -->
                    <rect x="0" y="55" width="50" height="50" fill="orange" fill-opacity="0.05"/>
                    <rect x="0" y={105-50*countNorth2 / totalCount2} width="50" height={50*countNorth2 / totalCount2} fill="orange" fill-opacity="0.5"/>
                    <text x="25" y="80" text-anchor="middle" dominant-baseline="middle" fill="orange">{countNorth2}</text>

                    <!-- West Region -->
                    <rect x="55" y="55" width="50" height="50" fill="purple" fill-opacity="0.05"/>
                    <rect x="55" y={105-50*countWest2 / totalCount2} width="50" height={50*countWest2 / totalCount2} fill="purple" fill-opacity="0.5"/>
                    <text x="80" y="80" text-anchor="middle" dominant-baseline="middle" fill="purple">{countWest2}</text>
                </g>
            </svg>
        </div>
    </div>
</div>


<script>
  export let data
  let product_value1 = 50;
  let product_value2 = 1;
  let productName1 = '';
  let productType1 = '';
  let productType2 = '';
  let countEast1 = 0;
  let countSouth1 = 0;
  let countNorth1 = 0;
  let countWest1 = 0;
  let totalCount1 = countEast1 + countSouth1 + countNorth1 + countWest1;

  let countEast2 = 0;
  let countSouth2 = 0;
  let countNorth2 = 0;
  let countWest2 = 0;
  let totalCount2 = countEast2 + countSouth2 + countNorth2 + countWest2;

  $: {
    if (data && data.products) {
      productName1 = data.products[product_value1] ? data.products[product_value1]['Product Name'] : 'Product not found';
    }
    if (data && data.products) {
      productType1 = data.products[product_value1] ? data.products[product_value1]['Type'] : 'Product not found';
    }
    countEast1 = data.counts[product_value1][0];
    countSouth1 = data.counts[product_value1][1];
    countNorth1 = data.counts[product_value1][2];
    countWest1 = data.counts[product_value1][3];
    totalCount1 = countEast1 + countSouth1 + countNorth1 + countWest1;

    const categories = [
    'ADVENTURING EQUIPMENT',
    'ANIMALS & TRANSPORTATION',
    'ARMS & ARMOUR',
    'JEWELRY',
    'MUSICAL INSTRUMENT',
    'POTIONS & SCROLLS',
    'SUMMONING DEVICE',
    'TOOLS & KITS'
    ];
    productType2 = categories[product_value2];
    countEast2 = data.types[product_value2-1][0];
    countSouth2 = data.types[product_value2-1][1];
    countNorth2 = data.types[product_value2-1][2];
    countWest2 = data.types[product_value2-1][3];
    totalCount2 = countEast2 + countSouth2 + countNorth2 + countWest2;
  }
</script>