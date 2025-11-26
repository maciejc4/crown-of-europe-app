package com.crownofeurope.tests;

import com.crownofeurope.pages.MainPage;
import io.qameta.allure.*;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

@Epic("Crown of Europe")
@Feature("Search Functionality")
@Tag("search")
public class SearchTest extends BaseTest {

    private final MainPage mainPage = new MainPage();

    @Test
    @Story("Mountain Search")
    @Severity(SeverityLevel.CRITICAL)
    @DisplayName("Should filter mountains by name")
    void shouldFilterMountainsByName() {
        mainPage.verifyPageLoaded();
        int initialCount = mainPage.getMountainCount();

        mainPage.searchMountain("Mont Blanc");

        int filteredCount = mainPage.getMountainCount();
        assertThat(filteredCount).as("Filtered results should be less than or equal to initial")
                .isLessThanOrEqualTo(initialCount);
    }

    @Test
    @Story("Mountain Search")
    @Severity(SeverityLevel.NORMAL)
    @DisplayName("Should show all mountains when search is cleared")
    void shouldShowAllMountainsWhenSearchCleared() {
        mainPage.verifyPageLoaded();
        int initialCount = mainPage.getMountainCount();

        mainPage.searchMountain("Mont Blanc");
        mainPage.clearSearch();

        int countAfterClear = mainPage.getMountainCount();
        assertThat(countAfterClear).as("Count after clearing search should equal initial count")
                .isEqualTo(initialCount);
    }

    @Test
    @Story("Mountain Search")
    @Severity(SeverityLevel.NORMAL)
    @DisplayName("Should filter by country/region")
    void shouldFilterByRegion() {
        mainPage.verifyPageLoaded();

        mainPage.searchMountain("Alps");

        int filteredCount = mainPage.getMountainCount();
        assertThat(filteredCount).as("Should find mountains in Alps region")
                .isGreaterThan(0);
    }

    @Test
    @Story("Mountain Search")
    @Severity(SeverityLevel.MINOR)
    @DisplayName("Should handle case-insensitive search")
    void shouldHandleCaseInsensitiveSearch() {
        mainPage.verifyPageLoaded();

        mainPage.searchMountain("MONT BLANC");
        int upperCaseCount = mainPage.getMountainCount();

        mainPage.clearSearch();
        mainPage.searchMountain("mont blanc");
        int lowerCaseCount = mainPage.getMountainCount();

        assertThat(upperCaseCount).as("Case-insensitive search should return same results")
                .isEqualTo(lowerCaseCount);
    }

    @Test
    @Story("Mountain Search")
    @Severity(SeverityLevel.MINOR)
    @DisplayName("Should show no results for non-existent mountain")
    void shouldShowNoResultsForNonExistentMountain() {
        mainPage.verifyPageLoaded();

        mainPage.searchMountain("NonExistentMountainXYZ123");

        int filteredCount = mainPage.getMountainCount();
        assertThat(filteredCount).as("Should show no results for non-existent mountain")
                .isEqualTo(0);
    }
}
