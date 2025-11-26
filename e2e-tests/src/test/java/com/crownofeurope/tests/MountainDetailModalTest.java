package com.crownofeurope.tests;

import com.crownofeurope.pages.MainPage;
import com.crownofeurope.pages.MountainDetailModal;
import io.qameta.allure.*;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

@Epic("Crown of Europe")
@Feature("Mountain Detail Modal")
@Tag("modal")
public class MountainDetailModalTest extends BaseTest {

    private final MainPage mainPage = new MainPage();
    private final MountainDetailModal modal = new MountainDetailModal();

    @Test
    @Story("View Mountain Details")
    @Severity(SeverityLevel.CRITICAL)
    @DisplayName("Should open mountain detail modal on row click")
    void shouldOpenMountainDetailModal() {
        mainPage.verifyPageLoaded();
        mainPage.clickMountainRow(0);

        modal.verifyModalVisible();
    }

    @Test
    @Story("View Mountain Details")
    @Severity(SeverityLevel.NORMAL)
    @DisplayName("Modal should display mountain image")
    void shouldDisplayMountainImage() {
        mainPage.verifyPageLoaded();
        mainPage.clickMountainRow(0);

        modal.verifyModalVisible()
                .verifyImageVisible();
    }

    @Test
    @Story("View Mountain Details")
    @Severity(SeverityLevel.NORMAL)
    @DisplayName("Modal should display OSM map")
    void shouldDisplayOsmMap() {
        mainPage.verifyPageLoaded();
        mainPage.clickMountainRow(0);

        modal.verifyModalVisible()
                .verifyMapVisible();
    }

    @Test
    @Story("View Mountain Details")
    @Severity(SeverityLevel.NORMAL)
    @DisplayName("Modal should display mountain description")
    void shouldDisplayMountainDescription() {
        mainPage.verifyPageLoaded();
        mainPage.clickMountainRow(0);

        modal.verifyModalVisible()
                .verifyDescriptionVisible();
    }

    @Test
    @Story("View Mountain Details")
    @Severity(SeverityLevel.NORMAL)
    @DisplayName("Modal should display trails section")
    void shouldDisplayTrailsSection() {
        mainPage.verifyPageLoaded();
        mainPage.clickMountainRow(0);

        modal.verifyModalVisible()
                .verifyTrailsSectionVisible();
    }

    @Test
    @Story("View Mountain Details")
    @Severity(SeverityLevel.NORMAL)
    @DisplayName("Modal should display weather information")
    void shouldDisplayWeatherInfo() {
        mainPage.verifyPageLoaded();
        mainPage.clickMountainRow(0);

        modal.verifyModalVisible()
                .verifyWeatherVisible();
    }

    @Test
    @Story("View Mountain Details")
    @Severity(SeverityLevel.NORMAL)
    @DisplayName("Modal should have Mapy.cz integration link")
    void shouldHaveMapyCzLink() {
        mainPage.verifyPageLoaded();
        mainPage.clickMountainRow(0);

        modal.verifyModalVisible()
                .verifyMapyCzLink();
    }

    @Test
    @Story("View Mountain Details")
    @Severity(SeverityLevel.NORMAL)
    @DisplayName("Should close modal when close button clicked")
    void shouldCloseModal() {
        mainPage.verifyPageLoaded();
        mainPage.clickMountainRow(0);

        modal.verifyModalVisible();
        modal.closeModal();

        mainPage.verifyPageLoaded();
    }

    @Test
    @Story("View Mountain Details")
    @Severity(SeverityLevel.NORMAL)
    @DisplayName("Should open different modals for different mountains")
    void shouldOpenDifferentModalsForDifferentMountains() {
        mainPage.verifyPageLoaded();

        // Open first mountain
        mainPage.clickMountainRow(0);
        modal.verifyModalVisible();
        String firstMountainTitle = modal.getModalTitle();
        modal.closeModal();

        // Open second mountain
        mainPage.clickMountainRow(1);
        modal.verifyModalVisible();
        String secondMountainTitle = modal.getModalTitle();
        modal.closeModal();

        assertThat(firstMountainTitle).as("Different mountains should have different titles")
                .isNotEqualTo(secondMountainTitle);
    }
}
