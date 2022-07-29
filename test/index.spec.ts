import { suite } from 'uvu';
import * as assert from 'uvu/assert';
import { project } from '../src';

const test = suite('Habitable Initial Setup');

test('Project Name is Correct', async () => {
  assert.equal(project, 'habitable');
});

export const { run } = test;
