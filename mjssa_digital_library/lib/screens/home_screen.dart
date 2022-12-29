import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      // NOTE: crossAxisAlignment important to stretching contents to fill width.
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Image.asset('images/logo.png', fit: BoxFit.cover),
        Image.asset('images/bible-quote-1.png', fit: BoxFit.cover),
      ],
    );
  }
}
