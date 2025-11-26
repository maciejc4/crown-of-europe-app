package com.crownofeurope.tests;

import com.crownofeurope.pages.MainPage;
import io.qameta.allure.*;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

@Epic("Crown of Europe")
@Feature("Page Loading")
@Tag("smoke")
public class PageLoadTest extends BaseTest {

    private final MainPage mainPage = new MainPage();

    @Test
    @Story("Initial Page Load")
    @Severity(SeverityLevel.BLOCKER)
    @DisplayName("Page should load successfully with all main elements visible")
    void shouldLoadPageSuccessfully() {
        mainPage.verifyPageLoaded()
                .verifyHeaderVisible()
                .verifyStatisticsVisible()
                .verifyTableHasData()
                .verifyFooterVisible();
    }

    @Test
    @Story("Initial Page Load")
    @Severity(SeverityLevel.CRITICAL)
    @DisplayName("Mountain table should contain 47 European peaks")
    void shouldDisplayAllMountains() {
        mainPage.verifyPageLoaded();
        int mountainCount = mainPage.getMountainCount();
        assertThat(mountainCount).as("Number of mountains in table").isEqualTo(47);
    }

    @Test
    @Story("Initial Page Load")
    @Severity(SeverityLevel.NORMAL)
    @DisplayName("Footer should display correct copyright year")
    void shouldDisplayCorrectCopyrightYear() {
        mainPage.verifyPageLoaded()
                .verifyFooterCopyright("2025");
    }
}
