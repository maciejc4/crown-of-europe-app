package com.crownofeurope.tests;

import com.crownofeurope.pages.MainPage;
import io.qameta.allure.*;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

@Epic("Crown of Europe")
@Feature("Checkbox Functionality")
@Tag("checkbox")
public class CheckboxTest extends BaseTest {

    private final MainPage mainPage = new MainPage();

    @Test
    @Story("Mark Mountain as Climbed")
    @Severity(SeverityLevel.CRITICAL)
    @DisplayName("Should toggle mountain climbed status")
    void shouldToggleMountainClimbedStatus() {
        mainPage.verifyPageLoaded();

        boolean initialStatus = mainPage.isMountainClimbed(0);
        mainPage.toggleMountainCheckbox(0);
        boolean afterToggle = mainPage.isMountainClimbed(0);

        assertThat(afterToggle).as("Checkbox status should toggle")
                .isNotEqualTo(initialStatus);
    }

    @Test
    @Story("Mark Mountain as Climbed")
    @Severity(SeverityLevel.NORMAL)
    @DisplayName("Should toggle multiple mountains")
    void shouldToggleMultipleMountains() {
        mainPage.verifyPageLoaded();

        mainPage.toggleMountainCheckbox(0);
        mainPage.toggleMountainCheckbox(1);
        mainPage.toggleMountainCheckbox(2);

        boolean first = mainPage.isMountainClimbed(0);
        boolean second = mainPage.isMountainClimbed(1);
        boolean third = mainPage.isMountainClimbed(2);

        assertThat(first && second && third)
                .as("All three mountains should be marked as climbed")
                .isTrue();
    }

    @Test
    @Story("Mark Mountain as Climbed")
    @Severity(SeverityLevel.NORMAL)
    @DisplayName("Should uncheck previously checked mountain")
    void shouldUncheckMountain() {
        mainPage.verifyPageLoaded();

        // Check
        mainPage.toggleMountainCheckbox(0);
        assertThat(mainPage.isMountainClimbed(0)).isTrue();

        // Uncheck
        mainPage.toggleMountainCheckbox(0);
        assertThat(mainPage.isMountainClimbed(0)).isFalse();
    }
}
