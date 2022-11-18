---
layout: page
permalink: /publications/journals/
title: journals
description: publications by categories in reversed chronological order. Corresponding author is denoted with '#'.
years: [2022, 2021, 2020, 2019, 2018, 2017]
nav: false
nav_order: 6
---
<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f journal_papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
