// 站点交互脚本（匹配 index.html）
// 依赖：jQuery + Bootstrap；Chart.js 可选（仅当你在页面放了 <canvas id="chart-1"> 时）
(function ($) {
    $(function () {
        // 轮播（如果页面里使用了 .carousel 结构）
        $('.carousel').carousel();

        // Tab 切换（如果页面里有 #tabs）
        $('#tabs a[data-toggle="tab"]').on('click', function (e) {
            e.preventDefault();
            $(this).tab('show');
        });

        // 手风琴初始化（如果你后续加了 #faq-accordion）
        $('#faq-accordion').collapse({ toggle: false });

        // 可选：圈图示例（需要引入 Chart.js v1.x 且页面存在 <canvas id="chart-1">）
        var el = document.getElementById('chart-1');
        if (el && window.Chart) {
            new Chart(el.getContext('2d')).Doughnut([
                { value: 72, color: '#1abc9c' },
                { value: 28, color: '#ecf0f1' }
            ]);
        }
    });
})(jQuery);
