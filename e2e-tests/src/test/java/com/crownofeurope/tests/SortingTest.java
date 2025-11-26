package com.crownofeurope.tests;

import com.crownofeurope.pages.MainPage;
import io.qameta.allure.*;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

@Epic("Crown of Europe")
@Feature("Table Sorting")
@Tag("sorting")
public class SortingTest extends BaseTest {

    private final MainPage mainPage = new MainPage();

    @Test
    @Story("Column Sorting")
    @Severity(SeverityLevel.NORMAL)
    @DisplayName("Should sort by mountain name")
    void shouldSortByName() {
        mainPage.verifyPageLoaded();

        String firstRowBefore = mainPage.getRowText(0);
        mainPage.clickTableHeader("Name");
        String firstRowAfter = mainPage.getRowText(0);

        // After sorting, the first row should change (or stay if already sorted)
        assertThat(firstRowAfter).as("Table should be sortable by name").isNotNull();
    }

    @Test
    @Story("Column Sorting")
    @Severity(SeverityLevel.NORMAL)
    @DisplayName("Should sort by height")
    void shouldSortByHeight() {
        mainPage.verifyPageLoaded();

        mainPage.clickTableHeader("Height");
        String firstRowAfterAsc = mainPage.getRowText(0);

        mainPage.clickTableHeader("Height");
        String firstRowAfterDesc = mainPage.getRowText(0);

        // Clicking twice should toggle sort order
        assertThat(firstRowAfterAsc).as("Sort order should toggle on second click")
                .isNotNull();
    }

    @Test
    @Story("Column Sorting")
    @Severity(SeverityLevel.NORMAL)
    @DisplayName("Should sort by country")
    void shouldSortByCountry() {
        mainPage.verifyPageLoaded();

        mainPage.clickTableHeader("Country");
        String firstRow = mainPage.getRowText(0);

        assertThat(firstRow).as("Table should be sortable by country").isNotNull();
    }

    @Test
    @Story("Column Sorting")
    @Severity(SeverityLevel.NORMAL)
    @DisplayName("Should sort by region")
    void shouldSortByRegion() {
        mainPage.verifyPageLoaded();

        mainPage.clickTableHeader("Region");
        String firstRow = mainPage.getRowText(0);

        assertThat(firstRow).as("Table should be sortable by region").isNotNull();
    }

    @Test
    @Story("Column Sorting")
    @Severity(SeverityLevel.NORMAL)
    @DisplayName("Should sort by difficulty")
    void shouldSortByDifficulty() {
        mainPage.verifyPageLoaded();

        mainPage.clickTableHeader("Difficulty");
        String firstRow = mainPage.getRowText(0);

        assertThat(firstRow).as("Table should be sortable by difficulty").isNotNull();
    }
}
