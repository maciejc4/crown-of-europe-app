package com.crownofeurope.pages;

import com.codeborne.selenide.ElementsCollection;
import com.codeborne.selenide.SelenideElement;
import io.qameta.allure.Step;

import static com.codeborne.selenide.Condition.*;
import static com.codeborne.selenide.Selenide.*;

public class MainPage {

    // Header elements
    private final SelenideElement header = $("header, .header, mat-toolbar").as("Header");
    private final SelenideElement darkModeToggle = $("button[mattooltip*='mode'], .dark-mode-toggle, button mat-icon:has-text('dark_mode'), button mat-icon:has-text('light_mode')").as("Dark Mode Toggle");
    
    // Search
    private final SelenideElement searchInput = $("input[placeholder*='Search'], input[matinput], .search-input").as("Search Input");
    
    // Statistics
    private final SelenideElement statisticsSection = $(".statistics, .stats-container, mat-card:has(.stat)").as("Statistics Section");
    
    // Table elements
    private final SelenideElement mountainTable = $("table, mat-table").as("Mountain Table");
    private final ElementsCollection tableRows = $$("tbody tr, mat-row, tr.mat-mdc-row").as("Table Rows");
    private final ElementsCollection tableHeaders = $$("th, mat-header-cell").as("Table Headers");
    private final ElementsCollection checkboxes = $$("mat-checkbox, input[type='checkbox']").as("Checkboxes");
    
    // Buttons
    private final SelenideElement generatePdfButton = $("button:has-text('PDF'), button:has-text('Generate'), .pdf-button").as("Generate PDF Button");
    private final SelenideElement exportButton = $("button:has-text('Export'), button:has-text('Download'), .export-button").as("Export Button");
    private final SelenideElement importButton = $("button:has-text('Import'), button:has-text('Load'), .import-button, input[type='file']").as("Import Button");
    
    // Footer
    private final SelenideElement footer = $("footer, .footer").as("Footer");

    @Step("Verify page is loaded")
    public MainPage verifyPageLoaded() {
        mountainTable.shouldBe(visible);
        return this;
    }

    @Step("Verify header is visible")
    public MainPage verifyHeaderVisible() {
        header.shouldBe(visible);
        return this;
    }

    @Step("Verify statistics section is visible")
    public MainPage verifyStatisticsVisible() {
        statisticsSection.shouldBe(visible);
        return this;
    }

    @Step("Verify mountain table is visible with data")
    public MainPage verifyTableHasData() {
        mountainTable.shouldBe(visible);
        tableRows.shouldHave(sizeGreaterThan(0));
        return this;
    }

    @Step("Get number of mountains in table")
    public int getMountainCount() {
        return tableRows.size();
    }

    @Step("Search for mountain: {searchTerm}")
    public MainPage searchMountain(String searchTerm) {
        searchInput.shouldBe(visible).clear();
        searchInput.setValue(searchTerm);
        return this;
    }

    @Step("Clear search")
    public MainPage clearSearch() {
        searchInput.clear();
        return this;
    }

    @Step("Click on table header: {headerName}")
    public MainPage clickTableHeader(String headerName) {
        $$("th, mat-header-cell").findBy(text(headerName)).click();
        return this;
    }

    @Step("Click on mountain row: {index}")
    public MainPage clickMountainRow(int index) {
        tableRows.get(index).click();
        return this;
    }

    @Step("Toggle checkbox for mountain at index: {index}")
    public MainPage toggleMountainCheckbox(int index) {
        checkboxes.get(index).click();
        return this;
    }

    @Step("Check if mountain at index {index} is marked as climbed")
    public boolean isMountainClimbed(int index) {
        SelenideElement checkbox = checkboxes.get(index);
        return checkbox.$("input").isSelected() || checkbox.has(cssClass("mat-mdc-checkbox-checked"));
    }

    @Step("Toggle dark mode")
    public MainPage toggleDarkMode() {
        darkModeToggle.shouldBe(visible).click();
        return this;
    }

    @Step("Verify dark mode is active")
    public MainPage verifyDarkModeActive() {
        $("body").shouldHave(cssClass("dark-mode").or(cssClass("dark-theme")));
        return this;
    }

    @Step("Click Generate PDF button")
    public MainPage clickGeneratePdf() {
        generatePdfButton.shouldBe(visible).click();
        return this;
    }

    @Step("Click Export button")
    public MainPage clickExport() {
        exportButton.shouldBe(visible).click();
        return this;
    }

    @Step("Verify footer is visible")
    public MainPage verifyFooterVisible() {
        footer.shouldBe(visible);
        return this;
    }

    @Step("Verify footer contains copyright {year}")
    public MainPage verifyFooterCopyright(String year) {
        footer.shouldHave(text(year));
        return this;
    }

    @Step("Get table row text at index: {index}")
    public String getRowText(int index) {
        return tableRows.get(index).getText();
    }

    @Step("Verify search filters results")
    public MainPage verifySearchFilters(String searchTerm) {
        tableRows.forEach(row -> row.shouldHave(text(searchTerm).or(matchText("(?i).*" + searchTerm + ".*"))));
        return this;
    }
}
